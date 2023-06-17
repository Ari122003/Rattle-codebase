import React, { useContext, useState } from "react";
import { context } from "../Context/Notes/Notecontext";

export default function Addnote() {
	let { addNote,getNote } = useContext(context);

	const [note, setnote] = useState({
		title: "",
		description: "",
		tag:""
	});

	const noteadder = (e) => {
		e.preventDefault();
		addNote(note);
		getNote()
		
	};
	const onchange = (e) => {
		setnote({
			...note,
			[e.target.id]: e.target.value,
		});
	};

	return (
		<>
			<div className="container d-flex tw-justify-center tw-my-16" id="form">
				<div className=" tw-flex tw-justify-center tw-flex-col ">
					<div className="containerr tw-my-5">
						<input
							type="text"
							required="required"
							id="title"
							onChange={onchange}
						/>
						<i className="fa-solid fa-pen"></i>
						<label className="heading ">Title</label>
						<i></i>
					</div>
					<div className="containerr tw-my-5">
						<input
							type="text"
							required="required"
							id="description"
							onChange={onchange}
						/>
						<label className="heading ">Description</label>
						<i></i>
					</div>
					<div className="containerr tw-my-5">
						<input
							type="text"
							required="required"
							id="tag"
							onChange={onchange}
						/>
						<label className="heading ">Tag</label>
						<i></i>
					</div>
					<div className="buttonn tw-mb-4 tw-m-auto" onClick={noteadder}>
						<div className="box">A</div>
						<div className="box">d</div>
						<div className="box">d</div>
						<div className="box">N</div>
						<div className="box">o</div>
						<div className="box">t</div>
						<div className="box">e</div>
					</div>
				</div>
			</div>
		</>
	);
}
