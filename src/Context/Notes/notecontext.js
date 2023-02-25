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
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjFiMzg2NTVjMzE1MWJkYWQ3NGY3In0sImlhdCI6MTY3NjgxMTA2NH0.7pHWPaLfVSfXpYjF6Avb8zGlfhAeGrXVaQkMVlTWnc4",
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
		await fetch(`http://localhost:5000/api/notes/addnote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjFiMzg2NTVjMzE1MWJkYWQ3NGY3In0sImlhdCI6MTY3NjgxMTA2NH0.7pHWPaLfVSfXpYjF6Avb8zGlfhAeGrXVaQkMVlTWnc4",
			},

			body: JSON.stringify(Newnote),
		});
	};

	// Delete a note

	const deleteNote = async (id) => {
		await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjFiMzg2NTVjMzE1MWJkYWQ3NGY3In0sImlhdCI6MTY3NjgxMTA2NH0.7pHWPaLfVSfXpYjF6Avb8zGlfhAeGrXVaQkMVlTWnc4",
			},
		})
			.then((result) => {
				return result.json();
			})
			.then((final) => {
				console.log(final);
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
		await fetch(`localhost:5000/api/notes/updatenote/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjFiMzg2NTVjMzE1MWJkYWQ3NGY3In0sImlhdCI6MTY3NjgxMTA2NH0.7pHWPaLfVSfXpYjF6Avb8zGlfhAeGrXVaQkMVlTWnc4",
			},

			body: {},
		})
			.then((result) => {
				return result.json();
			})
			.then((final) => {
				console.log(final);
			});

		for (let i = 0; i <= note.length; i++) {
			let item = note[i];
			if (item._id == id) {
				item.title = title;
				item.description = description;
				item.tag = tag;
			}
		}
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
