import React, { useState } from "react";

export const context = React.createContext();

function Notecontext(props) {
	const details = {
		name: "Aritra",
		dept: "ECE",
	};

 const[state,setstate]=useState(details)

 const update=()=>{
    setTimeout(()=>{
        setstate({name:"Aritra Adhikray",dept:"CSE"})
    },3000)
 }








	return <context.Provider value={{state , update}}>{props.children}</context.Provider>;
}

export default Notecontext;
