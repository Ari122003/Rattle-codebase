const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
	// get the user form jwt and add it to req object

	const token = req.header("auth-token");

	if (!token) {
		res.status(401).json({ error: "Please authenticate using a valid token" });
	}

	try {
		const data = jwt.verify(token, "I am Aritra");
		req.user = data.user;
		next();
	} catch (error) {
		res.status(401).json({ error: "Please authenticate using a valid token" });
	}
};

module.exports = fetchuser;
