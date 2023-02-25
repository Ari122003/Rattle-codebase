import React, { useContext, useEffect, useState } from "react";
import { context } from "../Context/Notes/Notecontext";
import { note } from "./Noteitem";

export default function Editnote(props) {
	const { note, editNotes, getNote } = useContext(context);

	useEffect(() => {
		getNote();
	}, []);

const [value,setvalue] = useState({
   title:"",
   description:"",
   tag:""
})

	const search = (id) => {
		note.map((item) => {
			if (item._id === id) {
			  setvalue(item)
			}
		});
	};

	return (
		<div className="container  tw-my-8 ">
			<ol className="list-group list-group-numbered">
				{note.map((item) => {
					return (
						<li
							key={item._id}
							className="list-group-item d-flex justify-content-between align-items-start">
							<div className="ms-2 me-auto">
								<div className="fw-bold">{item.title}</div>
								{item.description}
							</div>
							<i
								className="fa-solid fa-file-pen"
								onClick={() => {
									search(item._id);
								}}></i>
						</li>
					);
				})}
			</ol>

			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder={value.title}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputPassword1"
                  placeholder={value.description}
                  
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Tag
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputPassword1"
                  placeholder={value.tag}
					/>
				</div>

				<button type="submit" className="btn text-dark btn-primary">
					Edit
				</button>
			</form>
		</div>
	);
}
