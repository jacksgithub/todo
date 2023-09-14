import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '', id: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createTodo({ ...this.state, id: uuid() });
		this.setState({ task: '', id: '' }); // clear form input
	}
	render() {
		return (
			<div className="NewTodoForm">
				<h4>New Todo</h4>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="task"
						placeholder="New Todo"
						value={this.state.task}
						onChange={this.handleChange}
					/>
					<button>ADD TODO</button>
				</form>
			</div>
		);
	}
}
