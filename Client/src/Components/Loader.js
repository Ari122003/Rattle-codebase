import React from "react";

export default function Loader(props) {
	return (
		<div className={`loader  ${props.load.msg}`}>
			<div className="loader-inner">
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line"></div>
				</div>
			</div>
		</div>
	);
}
