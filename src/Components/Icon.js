import React from "react"


const Icon=({icon,field,handler,type})=>{
   
    const addInfoHandler=()=>{
         handler({title:type,secondTitle:field})
    }

    



    return(<React.Fragment>
            <button onMouseOut={addInfoHandler} >{icon}</button>
    </React.Fragment>)
}

export default Icon