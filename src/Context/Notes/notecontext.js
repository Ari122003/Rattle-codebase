import React, { useState } from "react";

export const context = React.createContext();

function Notecontext(props) {
	const mynotes = [
		{
			_id: "63f3c7aafe1a5c9e03a1b7a8",
			user: "63f21b38655c3151bdad74f7",
			title: "This is my second note",
			description: "Hello I am Aritra",
			tag: "Personal",
			date: "2023-02-20T19:19:06.336Z",
			__v: 0,
		},
		{
			_id: "63f5b1afbef0c3ac8dc73752",
			user: "63f21b38655c3151bdad74f7",
			title: "This is my first note",
			description: "Hello I am Aritra Adikary",
			tag: "Personal",
			date: "2023-02-22T06:09:51.872Z",
			__v: 0,
		},
		{
			_id: "63f3c7aafe1a5c9e03a1b7a8",
			user: "63f21b38655c3151bdad74f7",
			title: "This is my second note",
			description: "Hello I am Aritra",
			tag: "Personal",
			date: "2023-02-20T19:19:06.336Z",
			__v: 0,
		},
		{
			_id: "63f5b1afbef0c3ac8dc73752",
			user: "63f21b38655c3151bdad74f7",
			title: "This is my first note",
			description: "Hello I am Aritra Adikary",
			tag: "Personal",
			date: "2023-02-22T06:09:51.872Z",
			__v: 0,
		},
		{
			_id: "63f3c7aafe1a5c9e03a1b7a8",
			user: "63f21b38655c3151bdad74f7",
			title: "This is my second note",
			description: "Hello I am Aritra",
			tag: "Personal",
			date: "2023-02-20T19:19:06.336Z",
			__v: 0,
		},
		{
			_id: "63f5b1afbef0c3ac8dc73752",
			user: "63f21b38655c3151bdad74f7",
			title: "This is my first note",
			description: "Hello I am Aritra Adikary",
			tag: "Personal",
			date: "2023-02-22T06:09:51.872Z",
			__v: 0,
		},
		{
			_id: "63f3c7aafe1a5c9e03a1b7a8",
			user: "63f21b38655c3151bdad74f7",
			title: "This is my second note",
			description: "Hello I am Aritra",
			tag: "Personal",
			date: "2023-02-20T19:19:06.336Z",
			__v: 0,
		},
		{
			_id: "63f5b1afbef0c3ac8dc73752",
			user: "63f21b38655c3151bdad74f7",
			title: "This is my first note",
			description: "Hello I am Aritra Adikary",
			tag: "Personal",
			date: "2023-02-22T06:09:51.872Z",
			__v: 0,
		},
	];

	const [note, setnote] = useState(mynotes);

	return <context.Provider value={{ note,setnote }}>{props.children}</context.Provider>;
}

export default Notecontext;
