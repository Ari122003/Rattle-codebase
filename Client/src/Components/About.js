import React from "react";
import Footer from "./Footer";

export default function About() {
	return (
		<>
			<div className="Container">
				<section className="tw-text-gray-400 tw-body-font tw-mx-10 tw-mt-15 tw-mb-20 tw-bg-gray-900">
					<div className="tw-container tw-px-5 tw-py-10 tw-mx-auto">
						<div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-mb-20">
							<h2 className=" tw-text-indigo-400 tw-tracking-widest tw-font-medium tw-text-2xl tw-title-font tw-mb-1">
								Rattle
							</h2>
							<h1 className="tw-sm:text-xl tw-text-xl tw-font-medium title-font tw-mb-4 tw-text-white">
								Your pocket notebook
							</h1>
							<p className="tw-lg:w-2/3 tw-mx-auto tw-leading-relaxed tw-text-base">
								It is not possible to carry a notebook everytime.<br/>This is our initiative to make your smart phone your pocket notebook.
							</p>
						</div>
						<div className="tw-flex tw-flex-wrap">
							<div className="tw-xl:w-1/4 lg:w-1/2 tw-md:w-full tw-px-8 tw-py-6 tw-border-l-2 tw-border-gray-800">
								<h2 className="text-lg sm:text-xl tw-text-white tw-font-medium title-font tw-mb-2">
									KEEP YOUR DATA SAFE:-
								</h2>
								<p className="tw-leading-relaxed tw-text-base tw-mb-4">
									Keeping your data safe is our responsibility, we give you garenty that your data is in safe hands.
								</p>
							</div>
							<div className="xl:w-1/4 lg:w-1/2 tw-md:w-full tw-px-8 tw-py-6 tw-border-l-2 tw-border-gray-800">
								<h2 className="tw-text-lg tw-sm:text-xl tw-text-white tw-font-medium tw-title-font tw-mb-2">
									CREATE ACCOUNT:-
								</h2>
								<p className="tw-leading-relaxed tw-text-base tw-mb-4">
									Create your Rattle account using valid Usernname , Email and Password.
								</p>
							</div>
							<div className="tw-xl:w-1/4 tw-lg:w-1/2 tw-md:w-full tw-px-8 tw-py-6 tw-border-l-2 tw-border-gray-800">
								<h2 className="tw-text-lg tw-sm:text-xl tw-text-white tw-font-medium tw-title-font tw-mb-2">
									SAVE YOUR NOTES:-
								</h2>
								<p className="tw-leading-relaxed tw-text-base tw-mb-4">
									Write valid notes and save , you can further edit a note after saving and also delete.
								</p>
							</div>
							<div className="tw-xl:w-1/4 tw-lg:w-1/2 tw-md:w-full tw-px-8 tw-py-6 tw-border-l-2 tw-border-gray-800">
								<h2 className="tw-text-lg tw-sm:text-xl tw-text-white tw-font-medium tw-title-font tw-mb-2">
									MULTIPLE ACCOUNTS:-
								</h2>
								<p className="tw-leading-relaxed tw-text-base tw-mb-4">
									You can use multiple accounts , just Logout from yout current account and login to another one.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}
