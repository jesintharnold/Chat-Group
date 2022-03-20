const route=require("express").Router();
const chatroute=require('./chatroute');
const authroute=require('./authroute');
const userroute=require('./userroute');

// user - section routes
route.use('/user/profile',userroute);

// chat - section routes
route.use('/chat',chatroute);

// auth - section routes
route.use('/api/auth',authroute);

module.exports=route;
