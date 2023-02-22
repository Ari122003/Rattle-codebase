import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
	
	let location = useLocation();

	useEffect(() => {
		
	}, [location]);

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container-fluid">
					<ul><li className="navbar-brand  tw-font-bold text-light">Rattle</li></ul>
					<button
						className="navbar-toggler bg-light"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									className={`nav-link ${location.pathname==="/"?"tw-font-extrabold":""}  text-light`}
									aria-current="page"
									to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className={`nav-link ${location.pathname==="/about"?"tw-font-extrabold":""} text-light`} to="/about">
									About
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
