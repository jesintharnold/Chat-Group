import { createContext, useContext, useEffect, useReducer } from "react";
import { GET_ITEMS_LIST } from "../dispatchactions";
import {MainitemReducer} from './mainreducer';

const Mainitemcontext=createContext(null);
const useMainitem=()=>useContext(Mainitemcontext);
const Mainitemprovider=({children})=>{

const inital={
  items:[]
};  

const [state,dispatch]=useReducer(MainitemReducer,inital);

useEffect(()=>{

//use axios to get payload then do the promise

dispatch({
  type:GET_ITEMS_LIST,
  payload:[]  //Get content details here
});

},[]);



return (
  <Mainitemcontext.Provider value={{state,dispatch}}>
    {children}
  </Mainitemcontext.Provider>
)
};


export {useMainitem,Mainitemprovider}