const express = require("express");
const router = express.Router();
const Notes = require("../Modules/Notes");
const fetchuser = require("../Middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// Endpoint for getiing notes of a user

router.get("/fetchnotes", fetchuser, async (req, res) => {
	try {
		// Search notes using user id
		const notes = await Notes.find({ user: req.user.id });
		res.json(notes);
	} catch (error) {
		//   if there is some error in the database
		console.log(error.message);
		res.status(500).send("Internal server error");
	}
});

// Endpoint for adding new notes

router.post(
	"/addnote",
	fetchuser,
	[
		body("title", "Enter a valid title").isLength({ min: 3 }),
		body("description", "Description must have atleast 5 characters").isLength({
			min: 5,
		}),
	],
	async (req, res) => {
		try {
			//   If there is an error in credentials
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			//    create and save notes
			const { title, description, tag } = req.body;

			const notes = new Notes({ title, description, tag, user: req.user.id });

			const savednotes = await notes.save();

			res.json(savednotes);
		} catch (error) {
			//   if there is some error in the database
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

// Endpoint for updating a note

router.put(
	"/updatenote/:id",
	fetchuser,
	[
		body("title", "Enter a valid title").isLength({ min: 3 }),
		body("description", "Description must have atleast 5 characters").isLength({
			min: 5,
		}),
	],
	async (req, res) => {
		try {
			const { title, description, tag } = req.body;

			// Create a new note object

			const Newnote = {};

			if (description) {
				Newnote.description = description;
			}
			if (title) {
				Newnote.title = title;
			}
			if (tag) {
				Newnote.tag = tag;
			}

			// Find the node is to be updated and update it

			let note = await Notes.findById(req.params.id);
			if (!note) {
				return res.status(404).send("Note not found!!");
			}

			//   Allow updation if the user owns the note

			if (note.user.toString() != req.user.id) {
				return res.status(401).send("Not allowed");
			}

			note = await Notes.findByIdAndUpdate(
				req.params.id,
				{ $set: Newnote },
				{ new: true }
			);

			res.json(note);
		} catch (error) {
			//   if there is some error in the database
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

// Endpoint for deleteing a note

router.delete(
	"/deletenote/:id",
	fetchuser,

	async (req, res) => {
		// Find the node and delete it
		try {
			let note = await Notes.findById(req.params.id);
			if (!note) {
				return res.status(404).send("Note not found!!");
			}

			//   Allow deletion if the user owns the note

			if (note.user.toString() != req.user.id) {
				return res.status(401).send("Not allowed");
			}

			note = await Notes.findByIdAndDelete(req.params.id);

			res.json({ Success: "Note has been deleted" });
		} catch (error) {
			//   if there is some error in the database
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

module.exports = router;
