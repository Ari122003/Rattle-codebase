import React from "react";

export default function Noteitem(props) {
	const notes = props.notes;
	return (
		<div className="col-md-3">
			<div className="card tw-my-6">
				<div className="card-body">
					<h1 className="card-title h5">{notes.title}</h1>
					
					<p className="card-text">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptate ratione cumque adipisci fuga quibusdam delectus. Maxime in, necessitatibus, earum doloremque porro mollitia ea facere harum totam itaque dolor quam.
					</p>
				</div>
			</div>
		</div>
	);
}
