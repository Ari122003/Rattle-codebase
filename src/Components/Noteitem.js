import React, { useContext, useRef } from "react";
import { context } from "../Context/Notes/Notecontext";
import { Link } from "react-router-dom";

export default function Noteitem(props) {
	const { deleteNote } = useContext(context);

	const notes = props.notes;

	const modal = useRef(null);
	const editnote = () => {
		modal.current.click();
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				hidden
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				ref={modal}>
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
								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label">
										Title
									</label>
									<input
										type="text"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>
								<div class="mb-3">
									<label for="exampleInputPassword1" class="form-label">
										Description
									</label>
									<input
										type="text"
										class="form-control"
										id="exampleInputPassword1"
									/>
								</div>
								<div class="mb-3">
									<label for="exampleInputPassword1" class="form-label">
										Tag
									</label>
									<input
										type="text"
										class="form-control"
										id="exampleInputPassword1"
									/>
								</div>
							</form>
						</div>
						<div className="modal-body -tw-my-5">...</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>

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
						<Link style={{ zIndex: "1" }} to="/editnote">
							<i className="fa-solid fa-eye icon "></i>
						</Link>
						<i
							className="fa-solid icon fa-pen-to-square tw-mt-1"
							onClick={editnote}></i>
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
