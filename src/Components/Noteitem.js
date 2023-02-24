import React, { useContext } from "react";
import { context } from "../Context/Notes/Notecontext";

export default function Noteitem(props) {
	const { deleteNote } = useContext(context);

	const notes = props.notes;
	return (
		<div className="col-md-3 d-flex tw-justify-center tw-flex">
			<div className="cards card  ">
				<div className="cards card heading container tw-text-center">
					<h2 className="">{notes.title.length>30?notes.title.slice(0,30)+"...":notes.title}</h2>
					<p className="tw-mt-12">{notes.description.length>30?notes.description.slice(0,30)+"...":notes.description}</p>
				</div>
				<div className="icont">
					<i className="fa-solid fa-pen-to-square icon " ></i>
					<i class="fa-solid icon fa-trash"></i>
				</div>
			</div>
		</div>
	);
}
