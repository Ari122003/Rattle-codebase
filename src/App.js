import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
