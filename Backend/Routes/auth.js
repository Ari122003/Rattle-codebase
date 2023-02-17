const express = require("express");
const router = express.Router();
const User = require("../Modules/User");

router.get("/", async (req, res) => {
	console.log(req.body);
	const user = User(req.body);
	res.send(req.body);
	await user.save();
});

module.exports = router;
