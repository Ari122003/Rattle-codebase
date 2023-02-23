import React, { useContext } from "react";
import { context } from "../Context/Notes/Notecontext";

export default function Noteitem(props) {
	const { deleteNote } = useContext(context);

	const notes = props.notes;
	return (
		<div className="col-md-3 d-flex tw-justify-center tw-flex">
			<div className="card tw-my-8">
				<div className="card heading  tw-text-center">
					<h2 className="">{notes.title}</h2>
					<p className="tw-mt-12">{notes.description}</p>
				    <i className="fa-solid fa-pen-to-square tw-mt-4" id="icon"></i>
				</div>
			</div>
		</div>
	);
}
