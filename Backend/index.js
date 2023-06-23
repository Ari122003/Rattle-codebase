require("dotenv").config();
const connect = require("./database");
const express = require("express");
var cors = require("cors");

connect();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./Routes/auth"));
app.use("/api/notes", require("./Routes/notes"));

app.get("/", (req, res) => {
	res.send("<h1>WORKING<h1>");
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
