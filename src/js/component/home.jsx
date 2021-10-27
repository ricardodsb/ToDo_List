import React, { useState } from "react";

const Todo = () => {
	const [inputTask, setInputTask] = useState("");
	const [inputList, setInputList] = useState([]);

	let delItem = index => {
		let newInputList = inputList.filter((inputTask, i) => i !== index);
		setInputList(newInputList);
	};
	const checkIfTaskIsRepeated = newTask => {
		let isRepeated = false;
		inputList.forEach(task => {
			if (task.label === newTask) {
				isRepeated = true;
			}
		});
		console.log({ isRepeated, inputList, newTask });
		return isRepeated;
	};
	let addItem = e => {
		if (e.keyCode == 13) {
			if (!inputTask) {
				alert("You need to insert a task");
				return;
			}
			if (checkIfTaskIsRepeated(inputTask)) {
				console.log(checkIfTaskIsRepeated);
				alert("You can´t insert the same task twice");
				return;
			}
			const list = inputList.concat({ label: inputTask, done: false });
			setInputList(list);
			setInputTask("");
		}
	};
	return (
		<div className="text-center mt-5">
			<h1>{"ToDo's"}</h1>
			<input
				type="text"
				value={inputTask}
				placeholder="What needs to be done?"
				onChange={e => setInputTask(e.target.value)}
				onKeyUp={addItem}
			/>
			<div id="listbar">
				{inputList.map((todo, i) => (
					<li key={todo}>
						{todo.label}
						<button
							className="btn btn-danger"
							id="delete"
							onClick={() => delItem(i)}>
							<i className="fa fa-times" aria-hidden="true"></i>
						</button>
					</li>
				))}
				<div className="row">
					<div className="col mx-auto">
						<ul className="list-group">
							{inputList.length == 0 ? (
								<li className="list-group-item">
									Add your task...
								</li>
							) : (
								""
							)}
							<li
								id="last"
								className="list-group text-muted text-start counter">
								{inputList.length} Items left
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Todo;
