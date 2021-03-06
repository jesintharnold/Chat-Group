const express=require("express")();
const config=require("config");
const cors =require("cors");
const {logger}=require('./utils/logger'); 
const bodyParser = require('body-parser');
const channelDAO=require('./DB/chat/channel');
const http=require('http').createServer(express);
const {Dbconnect}=require('./DB/dbcon');
const {joinAllchannels} = require('./Controller/chat/op-controller.js');
const route=require('./Routes/route.js');
const { Msgschema,channelSchema} = require('./Schema/chatschemaval');
const { insertRoomMsg } = require("./DB/chat/channel");
const userDAO=require("./DB/user/users");
const imageuploadDAO=require("./DB/imageupload/imageupload");
const { globalHandle } = require("./utils/ErrorObject");
const { ListDAO,ItemDAO } = require("./DB/shoppingify/shoppingify");

express.use(cors());
express.use(bodyParser.urlencoded({extended:true}));
express.use(bodyParser.json());
express.use(route);
express.use(globalHandle); //Global Error handler

Dbconnect().then(con=>{
    channelDAO.injectCol(con);
    userDAO.injectCol(con);
    imageuploadDAO.injectCol(con);
    ListDAO.injectCol(con);
    ItemDAO.injectCol(con);
});


const io=require("socket.io")(http,{
    cors:{
        origin:config.get("clientOrgin")
    }
});






















//Initalize for chat application
io.on('connection',(Socket)=>{

    //It will allow us to join - Open Channels
    Socket.on("joinopenchannel",(payload)=>{
        
            logger.info(`------------------------`);
            joinAllchannels(Socket);
      
    })

    Socket.on('joinchannel',(payload)=>{
              Socket.join(payload.channelID);
              logger.warn(`${Socket.id}-Joined-${payload.channelID}`);
    })

    //channel section
    Socket.on('channel',payload=>{
        Socket.broadcast.emit('channel',payload);
    });
     
    Socket.on('roommessage',(roomData)=>{

    logger.info(roomData);
    const {error,value}=Msgschema.validate(roomData);
    if(value.channelID && value.Msg && value.ID){
        let res=insertRoomMsg(roomData);
        if(res==500){
          logger.error(res);
        }else{
             logger.warn(res); 
        }

        Socket.broadcast.emit('roommessage',roomData);

    }
    else{
        logger.error(error);
    }

    });
    

});


http.listen(config.get('App.PORT'),()=>logger.info(`Server running on ${config.get('App.PORT')}`));






