import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { db } from './firebase';
import {
	query,
	collection,
	onSnapshot,
	updateDoc,
	doc,
	addDoc,
	deleteDoc,
} from 'firebase/firestore';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	// Create Todo
	const createTodo = async (event) => {
		event.preventDefault();
		if (input === '') {
			alert('Please enter a valid todo');
			return;
		}
		await addDoc(collection(db, 'todos'), { text: input, completed: false });
		setInput('');
	};

	// Read from Firebase firestore
	useEffect(() => {
		const q = query(collection(db, 'todos'));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const todosArr = [];
			querySnapshot.forEach((doc) => {
				todosArr.push({ ...doc.data(), id: doc.id });
			});

			setTodos(todosArr);
		});

		return () => unsubscribe();
	}, []);

	// Update todo in Firebase
	const toggleComplete = async (todo) => {
		await updateDoc(doc(db, 'todos', todo.id), {
			completed: !todo.completed,
		});
	};

	// Delete Todo
	const deleteTodo = async (id) => {
		await deleteDoc(doc(db, 'todos', id));
	};

	return (
		<div className='h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]'>
			<div className='bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4'>
				<h3 className='text-3xl font-bold text-center text-gray-800 p-2'>Todo App</h3>
				<form onSubmit={createTodo} className='flex justify-between'>
					<input
						value={input}
						onChange={(event) => setInput(event.target.value)}
						type='text'
						placeholder='Add Todo'
						className='border p-2 w-full text-xl'
					/>
					<button className='border p-4 ml-2 bg-purple-500 text-slate-100'>
						<AiOutlinePlus size={30} />
					</button>
				</form>
				<ul>
					{todos.map((todo, index) => {
						return (
							<Todo
								key={index}
								todo={todo}
								toggleComplete={toggleComplete}
								deleteTodo={deleteTodo}
							/>
						);
					})}
				</ul>
				{todos.length === 0 ? null : (
					<p className='text-center p-2'>{`You have ${todos.length} todo(s)`}</p>
				)}
			</div>
		</div>
	);
};

export default App;
