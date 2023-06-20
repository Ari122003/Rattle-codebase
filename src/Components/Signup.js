import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
			await fetch("http://localhost:5000/api/auth/CreateUser", {
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
					console.log(result);

					if (result.success) {
						localStorage.setItem("Token", result.token);
						navigate("/");
						props.alert("Registration successfull", "success");
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

	return (
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
						<label
							htmlFor="username"
							className="inputt">
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
						<label htmlFor="password" className={details.cpassword==details.password?"inputt":"pass"}>
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
							<a rel="noopener noreferrer" href="#">
								Have an account? Login
							</a>
						</div>
					</div>
					<button className="sign">Submit</button>
				</form>
			</div>
		</div>
	);
}
