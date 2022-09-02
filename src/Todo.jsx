import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
	li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
	liCompleted: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
	text: `ml-2 cursor-pointer`,
	textCompleted: `ml-2 cursor-pointer line-through`,
	row: `flex`,
	button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
	return (
		<li className={todo.completed ? style.liCompleted : style.li}>
			<div className={style.row}>
				<input
					onClick={() => toggleComplete(todo)}
					type='checkbox'
					checked={todo.completed ? 'checked' : ''}
				/>
				<p
					onClick={() => toggleComplete(todo)}
					className={todo.completed ? style.textCompleted : style.text}>
					{todo.text}
				</p>
			</div>
			<button onClick={() => deleteTodo(todo.id)} className={style.button}>{<FaRegTrashAlt />}</button>
		</li>
	);
};

export default Todo;
