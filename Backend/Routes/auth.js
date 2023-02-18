const express = require("express");
const router = express.Router();
const User = require("../Modules/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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

	//   If there is an error in credentials

	async (req, res) => {
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
				user:{
					id:user.id,
				}
			}

			const token=  jwt.sign(data,"I am Aritra")
			res.json({token});

		} catch (error) {
			//   if there is some error in the database
			console.log(error.message);
			res.status(500).send("SOME ERROR OCCURED");
		}
	}
);

module.exports = router;
