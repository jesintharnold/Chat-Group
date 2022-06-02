import { createContext, useContext, useEffect, useReducer } from "react";
import { shoppinglistreducer } from "./shoppinglistReducer";


const Shoppinglistcontext=createContext(null);
export const useShoppinglist=()=>useContext(Shoppinglistcontext);


export const Shoppinglistprovider=({children})=>{

const inital={
  items:[],
  listStatus:'active',
  listName:null,
  loading:false
}

const [state,dispatch]=useReducer(shoppinglistreducer,inital);

useEffect(()=>{

// check and delete in local Storage 
// Get the data
// Set Again


},[]);


return (
  <Shoppinglistcontext.Provider value={{state,dispatch}}>
  {children}
  </Shoppinglistcontext.Provider>
)

};
