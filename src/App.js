import "./App.css";
import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Viewnote from "./Components/Viewnote";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/viewnote" element={<Viewnote/>} />
			</Routes>
		</>
	);
}

export default App;
