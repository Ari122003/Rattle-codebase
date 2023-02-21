import React, { useContext, useEffect } from "react";
import { context } from "../Context/Notes/Notecontext";

export default function About() {
	const details = useContext(context);

	useEffect(() => {
		details.update();
	}, []);

	return (
		<div>
			
			{details.state.name} and {details.state.dept}
		</div>
	);
}
