import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([""]);

	return (
		<div className="text-center mt-5">
			<h1 className="title">{"todo's"}</h1>

			<input
				id="task"
				type="text"
				task="task"
				placeholder="Add your task here:"
				onChange={e => {
					setTask(e.target.value);
				}}
				value={task}
			/>
			{list.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</div>
	);
};
export default Home;
