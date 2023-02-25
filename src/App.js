import "./App.css";
import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Editnote from "./Components/Editnote";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/editnote" element={<Editnote />} />
			</Routes>
		</>
	);
}

export default App;
