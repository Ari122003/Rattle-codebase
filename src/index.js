import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Notecontext from "./Context/Notes/Notecontext";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HashRouter>
		<Notecontext>
			<App />
		</Notecontext>
	</HashRouter>
);
