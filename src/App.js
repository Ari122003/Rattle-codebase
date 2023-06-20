import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Viewnote from "./Components/Viewnote";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Alert from "./Components/Alert";

function App() {

	const [alert, setalert] = useState(null);

	function showalert(text, type) {
		setalert({
			alert_text: text,
			alert_type: type,
		});

		setTimeout(function () {
			setalert(null);
		}, 2000);
	}
	return (
		<>
			<Navbar />
			<Alert alert={alert}/>
			<Routes>
				<Route exact path="/" element={<Home alert={showalert}/>} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/viewnote" element={<Viewnote/>} />
				<Route exact path="/login" element={<Login  alert={showalert}/>} />
				<Route exact path="/signup" element={<Signup alert={showalert}/>} />
			</Routes>
		</>
	);
}

export default App;
