const express = require("express");
const router = express.Router();
const User = require("../Modules/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../Middleware/fetchuser");

// createuser endpoint

router.post(
	"/CreateUser",
	[
		// credentials validators

		body("email", "Enter a valid email").isEmail(),
		body("name", "Enter a valid name").isLength({ min: 3 }),
		body("password", "Password must have atleast 5 characters").isLength({
			min: 5,
		}),
	],

	
	async (req, res) => {
		//   If there is an error in credentials
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// Check whether the user already exists or not

		try {
			let user = await User.findOne({ email: req.body.email });

			if (user) {
				return res
					.status(400)
					.json({ error: "User with this email already exeits" });
			}
			//  create the user in database

			const salt = await bcrypt.genSalt(10);

			const secpass = await bcrypt.hash(req.body.password, salt);

			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: secpass,
			});

			//    Token generator

			const data = {
				user: {
					id: user.id,
				},
			};

			const token = jwt.sign(data, "I am Aritra");
			res.json({ token });
		} catch (error) {
			//   if there is some error in the database
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

// login endpoint

router.post(
	"/login",
	[
		body("email", "Enter a valid email").isEmail(),

		body("password", "Password can not be blank").exists(),
	],

	async (req, res) => {
		//   If there is an error in credentials
		let success=false
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			success=false
			return res.status(400).json({  success,errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			//  If the user already exists

			let user = await User.findOne({ email });

			if (!user) {
				success=false
				return res.status(400).json({  success,error: "Invalid credentials" });
			}

			const passcomp = await bcrypt.compare(password, user.password);
			if (!passcomp) {
				success=false
				return res.status(400).json({ success,error: "Invalid credentials" });
			}

			//    Token generator

			const data = {
				user: {
					id: user.id,
				},
			};
              
			success=true
			const token = jwt.sign(data, "I am Aritra");
			res.json({ success,token });
		} catch (error) {
			//   if there is some error in the database
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

// Get user details endpoint

router.post(
	"/getuser",
	fetchuser,

	async (req, res) => {
		try {
			const userid = req.user.id;

			const user = await User.findById(userid).select("-password");
			res.send(user);
		} catch (error) {
			//   if there is some error in the database
			console.log(error.message);
			res.status(500).send("Internal server error");
		}
	}
);

module.exports = router;
