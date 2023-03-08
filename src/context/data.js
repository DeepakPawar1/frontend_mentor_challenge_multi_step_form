import { createContext } from "react";
import { useState } from "react";

const dataContext = createContext();

function Provider({children}){
const [cdata,setCdata]=useState({personal_info:{name:"",email:"",mob:""},plan:{type:false,name:"",amount:""},add_ons:[]})


const valueToShare = {
    cdata,
    add_data: (obj)=>{
        console.log(obj,"in context")
        setCdata({...cdata,...obj})
    }
}
return (
    <dataContext.Provider value={valueToShare}>
        {children}
    </dataContext.Provider>
)

}

export {Provider};
export default dataContext;