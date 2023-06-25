import React from "react";

export default function () {
	return (
		<div>
			<footer className="tw-text-gray-400  tw-bg-gray-900 tw-body-font">
				<div className="container tw-px-5  tw-mx-auto tw-flex tw-items-center tw-flex-row  ">
					<a className="tw-flex  tw-font-medium tw-items-center  tw-justify-center tw-text-white">
						<img src={require("../LOGO.jpg")} id="logo" />
						<span className="tw-ml-3 tw-text-xl">Rattle</span>
					</a>
					<p className="tw-text-sm tw-mb-6  tw-text-gray-400 tw-ml-4 tw-pl-6 tw-border-l-2 tw-border-gray-800 tw-py-2 tw-mt-4">
						Developed by
						<a
							href="https://twitter.com/knyttneve"
							className="tw-text-gray-500 tw-ml-1"
							target="_blank"
							rel="noopener noreferrer">
							Mr. Aritra Adhiakry
						</a>
					</p>
					<span className="tw-inline-flex tw-ml-auto tw-mr-20 tw-mb-6  tw-mt-4  tw-justify-start"></span>
				</div>
			</footer>
		</div>
	);
}
