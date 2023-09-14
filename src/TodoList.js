import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		this.createTodo = this.createTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}
	createTodo(newTodo) {
		this.setState((state) => ({
			todos: [...state.todos, newTodo],
		}));
	}
	removeTodo(id) {
		this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
	}
	updateTodo(id, updatedTask) {
		// Avoid mutating state (create new array)
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedTask };
			} else {
				return todo;
			}
		});
		this.setState({ todos: updatedTodos });
	}
	toggleTodo(id) {
		// Toggle if Todo is done
		// Avoid mutating state (create new array)
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isDone: !todo.isDone };
			} else {
				return todo;
			}
		});
		this.setState({ todos: updatedTodos });
	}

	render() {
		const todos = this.state.todos.map((todo) => {
			return (
				<Todo
					task={todo.task}
					key={todo.id}
					id={todo.id}
					isDone={todo.isDone}
					removeTodo={this.removeTodo}
					updateTodo={this.updateTodo}
					toggleTodo={this.toggleTodo}
				/>
			);
		});
		return (
			<div className="TodoList">
				<h1>Todo List</h1>
				<h3>A simple React app.</h3>
				<div className="TodoList-todos">{todos}</div>
				<div className="TodoList-form-container">
					<NewTodoForm createTodo={this.createTodo} />
				</div>
			</div>
		);
	}
}
