import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Updatenote from "./Components/Updatenote";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Alert from "./Components/Alert";
import Loader from "./Components/Loader";

function App() {
	const [alert, setalert] = useState(null);
	const [load, setload] = useState({msg:"d-none"});

	function showalert(text, type) {
		setalert({
			alert_text: text,
			alert_type: type,
		});

		setTimeout(function () {
			setalert(null);
		}, 3000);
	}
	function showalert2(text, type) {
		setalert({
			alert_text: text,
			alert_type: type,
		});

		setTimeout(function () {
			setalert(null);
		}, 10000);
	}

	const showloader = (text) => {
		setload({msg:text});
	};

	return (
		<>
			<Navbar />
			<Alert alert={alert} />
			<Loader load={load} />
			<Routes>
				<Route exact path="/" element={<Home alert={showalert} load={showloader} />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/updatenote" element={<Updatenote />} />
				<Route exact path="/login" element={<Login alert={showalert} load={showloader}/>} />
				<Route exact path="/signup" element={<Signup alert={showalert} welcome={showalert2} load={showloader}/>} />
			</Routes>
		</>
	);
}

export default App;
