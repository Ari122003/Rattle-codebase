const express = require("express");
const router = express.Router();
const User = require("../Modules/User");
const { body, validationResult } = require("express-validator");

router.get(
	"/",
	[
		body("email", "Enter a valid email").isEmail(),
		body("name", "Enter a valid name").isLength({ min: 3 }),
		body("password", "Password must have atleast 5 characters").isLength({
			min: 5,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		}).then((user) => res.json(user)).catch(()=>{
			res.send({
				error:"This email is already avialable"
			})
		})

		
	}
);

module.exports = router;
