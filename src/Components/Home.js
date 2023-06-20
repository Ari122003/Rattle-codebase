import React from "react";

import Notes from "./Notes";
import Footer from "./Footer";
import Addnote from "./Addnote";

export default function Home(props) {
	return (
		<>
			<h1 className="h1 heading tw-my-8" data-text="Add your notes here">Add your notes here</h1>
			
			<Addnote alert={props.alert} />

			<Notes alert={props.alert} />

			<Footer />
		</>
	);
}
