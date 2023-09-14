import React, { Component } from 'react';
// import './EditTodoForm.css';

export default class EditTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: this.props.task };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.state.task);
	}
	render() {
		return (
			<form className="EditTodoForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Save</button>
			</form>
		);
	}
}
