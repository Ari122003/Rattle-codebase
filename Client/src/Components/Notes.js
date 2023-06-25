import React, { useContext, useEffect, useRef, useState } from "react";
import { context } from "../Context/Notes/Notecontext";
import { useNavigate } from "react-router-dom";

import Noteitem from "./Noteitem";

export default function Notes(props) {
	let navigate = useNavigate();
	const { note, getNote, editNote } = useContext(context);

	useEffect(() => {
		if (localStorage.getItem("Token")) {
			getNote();
		} else {
			navigate("/login");
		}
	}, []);

	const ref = useRef(null);
	const refclose = useRef(null);

	const [notes, setnotes] = useState({
		id: "",
		title: "",
		description: "",
		tag: "",
	});

	const editor = (e) => {
		setnotes({
			...notes,
			[e.target.id]: e.target.value,
		});
	};

	const update = (note) => {
		ref.current.click();
		setnotes({
			id: note._id,
			title: note.title,
			description: note.description,
			tag: note.tag,
		});
	};

	const handelclick = (e) => {
		props.load("");
		e.preventDefault();
		let a = editNote(notes.id, notes.title, notes.description, notes.tag);
		a.then((msg) => {
			props.load("d-none");
			if (msg.success) {
				props.alert("Successfully updated", "success");
			} else {
				props.alert(msg.errors, "warning");
			}
		});

		refclose.current.click();
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-primary, d-none"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				ref={ref}>
				Launch demo modal
			</button>
			<div
				className="modal fade "
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog ">
					<div className="modal-content bg-dark">
						<div className="container text-light">
							<form>
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Title
									</label>
									<input
										type="text"
										className="form-control"
										id="title"
										aria-describedby="emailHelp"
										onChange={editor}
										value={notes.title}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">
										Description
									</label>
									<input
										type="text"
										className="form-control"
										id="description"
										onChange={editor}
										value={notes.description}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">
										Tag
									</label>
									<input
										type="text"
										className="form-control"
										id="tag"
										onChange={editor}
										value={notes.tag}
									/>
								</div>
							</form>
						</div>
						<div className="modal-body -tw-my-5">...</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary d-none"
								data-bs-dismiss="modal"
								ref={refclose}>
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={handelclick}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container tw-my-8">
				<h1
					className="tw-my-8 h1 heading  tw-text-center"
					data-text="Your notes">
					Your notes
				</h1>
				<div className="row">
					<h2 className="tw-my-8 h1 heading  tw-text-center">
						{note.length == 0 && "No notes to display"}
					</h2>
					{note.map((item) => {
						return (
							<Noteitem
								key={item._id}
								update={update}
								notes={item}
								alert={props.alert}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
