import "./App.css";
import Navbar from "./Components/Navbar";
import { HashRouter,Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
	return (
		<>
		<HashRouter>

			<Navbar />

			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route exact path="/about" element={<About/>} />
			</Routes>
		</HashRouter>
		</>
	);
}

export default App;
