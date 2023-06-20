import React, { useState } from "react";

export const context = React.createContext();

function Notecontext(props) {
	const mynotes = [];
	const [note, setnote] = useState(mynotes);

	// Get all notes

	const getNote = async () => {
		await fetch(`http://localhost:5000/api/notes/fetchnotes`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("Token"),
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setnote(result);
			});
	};

	// Add a note

	const addNote = async (Newnote) => {
		let response = await fetch(`http://localhost:5000/api/notes/addnote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("Token"),
			},

			body: JSON.stringify(Newnote),
		});

		return response.json();
	};

	// Delete a note

	const deleteNote = async (id) => {
		await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("Token"),
			},
		}).then((result) => {
			return result.json();
		});

		let newnote = note.filter((item) => {
			if (item._id !== id) {
				return item;
			}
		});

		setnote(newnote);
	};

	// Edit a note

	const editNote = async (id, title, description, tag) => {
		let response = await fetch(
			`http://localhost:5000/api/notes/updatenote/${id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"auth-token": localStorage.getItem("Token"),
				},

				body: JSON.stringify({ title, description, tag }),
			}
		);

		let result = response.json();
		result.then((value) => {
			if (value.success) {
				let newNote = JSON.parse(JSON.stringify(note));

				for (let i = 0; i <= note.length; i++) {
					let item = newNote[i];
					if (item._id == id) {
						newNote[i].title = title;
						newNote[i].description = description;
						newNote[i].tag = tag;
						break;
					}
				}

				setnote(newNote);
			}
			  
		});

		return result

	
	};

	return (
		<context.Provider
			value={{
				note,
				getNote,
				addNote,
				deleteNote,
				editNote,
			}}>
			{props.children}
		</context.Provider>
	);
}

export default Notecontext;
