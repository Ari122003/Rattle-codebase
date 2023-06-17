import React, { useContext, useRef, useState } from "react";
import { context } from "../Context/Notes/Notecontext";
import { Link } from "react-router-dom";

export default function Noteitem(props) {
	const { deleteNote } = useContext(context);

	const {notes,update}= props;

	
	

	return (
		<>
			<div className="col-md-3 d-flex tw-justify-center tw-flex tw-my-5">
				<div className="cards card  ">
					<span className="badge rounded-pill tag tw-mt-2 text-bg-light">
						{notes.tag}
					</span>

					<div className="cards card heading container tw-text-center">
						<h2>
							{notes.title.length > 10
								? notes.title.slice(0, 10) + "..."
								: notes.title}
						</h2>
						<p className="tw-mt-12">
							{notes.description.length > 15
								? notes.description.slice(0, 15) + "..."
								: notes.description}
						</p>
					</div>
					<div className="icont">
						<Link style={{ zIndex: "1" }} to="/viewnote">
							<i className="fa-solid fa-eye icon "></i>
						</Link>
						<i
							className="fa-solid icon fa-pen-to-square tw-mt-1"
							onClick={()=>{update(notes)}}></i>
						<i
							className="fa-solid icon fa-trash tw-mt-1"
							onClick={() => {
								deleteNote(notes._id);
							}}></i>
					</div>
				</div>
			</div>
		</>
	);
}
