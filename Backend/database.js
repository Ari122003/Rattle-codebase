const mong = require("mongoose");
mong.set('strictQuery', true);

// const uri = "mongodb://127.0.0.1:27017/I-Notebook";
const uri = "mongodb+srv://Aritra:Aritra%402003@cluster0.kaovz5k.mongodb.net/";

const connect = async () => {
	await mong.connect(uri, () => {
		console.log("Successfully connected");
	});
};

module.exports = connect;
