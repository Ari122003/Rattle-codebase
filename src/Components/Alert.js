import React from "react";

export default function Alert(props) {
	return (
		<div style={{ height: "100px" }}>
			{props.alert && (
				<div
					className={`alert alert-${props.alert.alert_type} alert-dismissible fade show`}
					role="alert">
					<strong>{props.alert.alert_text}</strong>
				</div>
			)}
		</div>
	);
}
