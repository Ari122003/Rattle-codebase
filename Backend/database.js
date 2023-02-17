const mong = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/I-Notebook";

const connect = async () => {
	await mong.connect(uri, () => {
		console.log("Successfully connected");
	});
};

module.exports = connect;
