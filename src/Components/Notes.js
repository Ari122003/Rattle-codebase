import React, { useContext } from "react";
import { context } from "../Context/Notes/Notecontext";
import Noteitem from "./Noteitem";

export default function Notes() {
	const { note, setnote } = useContext(context);

	return (
		<>
        <div className="container tw-my-8">

			<h1 className="tw-mt-8 h1 tw-text-center">Your notes</h1>
			<div className="row">
				
					{note.map((item) => {
						return <Noteitem notes={item} />;
					})}
				
			</div>
        </div>
		</>
	);
}
