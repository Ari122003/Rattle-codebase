import React, { useContext } from "react";
import { context } from "../Context/Notes/Notecontext";
import { Link } from "react-router-dom";

export default function Noteitem(props) {
	const { deleteNote } = useContext(context);

	const notes = props.notes;

	return (
		<div className="col-md-3 d-flex tw-justify-center tw-flex tw-my-5">
			<div className="cards card  ">
				<span className="badge rounded-pill tag tw-mt-2 text-bg-light">
					{notes.tag}
				</span>

				<div className="cards card heading container tw-text-center">
					<h2>
						{notes.title.length > 30
							? notes.title.slice(0, 30) + "..."
							: notes.title}
					</h2>
					<p className="tw-mt-12">
						{notes.description.length > 30
							? notes.description.slice(0, 30) + "..."
							: notes.description}
					</p>
				</div>
				<div className="icont">
					<Link style={{ zIndex: "1" }} to="/editnote" >
						<i className="fa-solid fa-pen-to-square icon "></i>
					</Link>
					<i
						className="fa-solid icon fa-trash tw-mt-1"
						onClick={() => {
							deleteNote(notes._id);
						}}></i>
				</div>
			</div>
		</div>
	);
}
