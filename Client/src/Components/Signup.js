import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

export default function (props) {
	const [details, setdetails] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: "",
	});

	let navigate = useNavigate();

	const submit = async (e) => {
		e.preventDefault();

		if (details.password == details.cpassword) {
			await fetch(`https://rattle-18s7.onrender.com/api/auth/CreateUser`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					name: details.username,
					email: details.email,
					password: details.password,
				}),
			})
				.then((response) => {
					return response.json();
				})
				.then((result) => {
					props.load("d-none");
					if (result.success) {
						localStorage.setItem("Token", result.token);
						navigate("/");
						props.welcome(`WELCOME MR. ${details.username}`, "success");
					} else {
						props.alert(result.errors, "warning");
					}
				});
		} else {
			props.alert("Password doesn't match", "warning");
		}
	};

	const change = (e) => {
		setdetails({
			...details,
			[e.target.name]: e.target.value,
		});
	};

	const loader = () => {
		props.load("");
	};

	return (
		<>
			<div className="container tw-content-center">
				<div className="form-container tw-mt-10">
					<p className="title">Signup</p>
					<form className="form" onSubmit={submit}>
						<div className="input-group">
							<label htmlFor="username" className="inputt">
								Username
							</label>
							<input
								type="text"
								name="username"
								id="username"
								placeholder=""
								onChange={change}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="username" className="inputt">
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder=""
								onChange={change}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="username" className="inputt">
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder=""
								onChange={change}
							/>
						</div>
						<div className="input-group">
							<label
								htmlFor="password"
								className={
									details.cpassword == details.password ? "inputt" : "pass"
								}>
								Confirm Password
							</label>
							<input
								type="password"
								name="cpassword"
								id="cpassword"
								placeholder=""
								onChange={change}
							/>
							<div className="forgot">
								<Link rel="noopener noreferrer" to="/login">
									Have an account? Login
								</Link>
							</div>
						</div>
						<button className="sign" onClick={loader}>
							Submit
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}
