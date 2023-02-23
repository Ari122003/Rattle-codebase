import React, { useContext } from "react";
import { context } from "../Context/Notes/Notecontext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

export default function Notes() {
	const { note } = useContext(context);

	return (
		<>
        
        <div className="container tw-my-8">
            

			<h1 className="tw-my-8 h1 heading  tw-text-center" data-text="Your notes">Your notes</h1>
			<div className="row">
            
				
					{note.map((item) => {
						return <Noteitem key={item._id} notes={item} />;
					})}
				
			</div>
        </div>
		</>
	);
}
