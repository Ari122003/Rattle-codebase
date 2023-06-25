import React, { useContext, useEffect } from "react";
import { context } from "../Context/Notes/Notecontext";

export default function Editnote() {
	const { note, getNote } = useContext(context);

	useEffect(() => {
		getNote();
	}, []);

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
						</li>
					);
				})}
			</ol>
		</div>
	);
}
