import React from "react";

export const context = React.createContext();

function Notecontext(props) {
	return <context.Provider value={{}}>{props.children}</context.Provider>;
}

export default Notecontext;
