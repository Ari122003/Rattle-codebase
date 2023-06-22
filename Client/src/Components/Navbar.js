import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	let location = useLocation();
	let navigate = useNavigate();

	useEffect(() => {}, [location]);

	const clear = () => {
		navigate("/login")
		localStorage.clear();
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark tw-text-white">
				<div className="container-fluid">
					<div className="tw-flex  tw-font-medium tw-items-center  tw-justify-center tw-text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="tw-w-10 tw-h-10 tw-text-white tw-p-2 tw-bg-indigo-500 tw-rounded-full"
							viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>

						<ul>
							<li className="navbar-brand tw-ml-3  heading ">
								<svg viewBox="0 0 960 300">
									<symbol id="s-text">
										<text textAnchor="middle" x="50%" y="80%">
											Rattle
										</text>
									</symbol>

									<g className="g-ants">
										<use href="#s-text" className="text-copy"></use>
										<use href="#s-text" className="text-copy"></use>
										<use href="#s-text" className="text-copy"></use>
										<use href="#s-text" className="text-copy"></use>
										<use href="#s-text" className="text-copy"></use>
									</g>
								</svg>
							</li>
						</ul>
					</div>
					<button
						className="navbar-toggler tw-bg-slate-500"
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
							<li className="nav-item ">
								<Link
									className={`nav-link ${
										location.pathname === "/" ? "tw-font-extrabold" : ""
									} text-light`}
									aria-current="page"
									to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link ${
										location.pathname === "/about" ? "tw-font-extrabold" : ""
									}  text-light`}
									to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link ${
										location.pathname === "/login" ? "tw-font-extrabold" : ""
									}  text-light ${localStorage.getItem("Token")!=null?"d-none":""}`}
									to="/login">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link ${
										location.pathname === "/signup" ? "tw-font-extrabold" : ""
									}  text-light  ${localStorage.getItem("Token")!=null?"d-none":""}`}
									to="/signup">
									Signup
								</Link>
							</li>
							<li className="nav-item">
								<label className={`nav-link text-light ${localStorage.getItem("Token")==null?"d-none":""}`} onClick={clear}>
									Logout
								</label>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
