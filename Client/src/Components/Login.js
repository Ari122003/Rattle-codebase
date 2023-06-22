import React from "react";
import  { useState, } from "react";
import  { useNavigate } from "react-router-dom";

export default function Login(props) {
	const [details, setdetails] = useState({
		email: "",
		password: "",
	});

	let navigate = useNavigate()

	const change = (e) => {
		setdetails({
			...details,
			[e.target.name]: e.target.value,
		});
	};

	const submit = async (e) => {
		e.preventDefault();
		await fetch("http://localhost:5000/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify({email:details.email, password:details.password}),
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				console.log(result)
				if(result.success)
				{
					localStorage.setItem("Token", result.token)
					navigate("/")
					props.alert("Login successful", "success")
				}
				else{
					props.alert(result.errors, "danger")
				}
			})
	};

	return (
		<div>
			<div className="login-box">
				<p>Login</p>
				<form onSubmit={submit}>
					<div className="user-box">
						<input required="" name="email" type="text" value={details.email} onChange={change} />
						<label>Email</label>
					</div>
					<div className="user-box">
						<input
							required=""
							name="password"
							type="password"
              value={details.password}
							onChange={change}
						/>
						<label>Password</label>
					</div>
					<button>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						lOGIN
					</button>
				</form>
				{/* <p>Don't have an account? <a href="" className="a2">Sign up!</a></p> */}
			</div>
		</div>
	);
}
