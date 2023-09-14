import React, { Component } from 'react';
import './Todo.css';
// import EditTodoForm from './EditTodoForm';

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { task: this.props.task, isEditMode: false };
		this.handleRemove = this.handleRemove.bind(this);
		this.handleToggleEdit = this.handleToggleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleToggleDone = this.handleToggleDone.bind(this);
	}
	handleRemove() {
		this.props.removeTodo(this.props.id);
	}
	handleToggleEdit() {
		this.setState({ isEditMode: !this.state.isEditMode });
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleUpdate(evt) {
		// Take new task data and pass up to parent; toggle edit mode
		evt.preventDefault();
		this.props.updateTodo(this.props.id, this.state.task);
		this.handleToggleEdit();
	}
	handleToggleDone(evt) {
		// Make sure correct element clicked
		if (evt.target === evt.currentTarget) {
			this.props.toggleTodo(this.props.id);
		}
	}
	render() {
		let classes = this.props.isDone ? 'Todo done' : 'Todo';
		let content;
		if (this.state.isEditMode) {
			// Alt version w/ separate Edit form component
			// content = (
			// 	<EditTodoForm
			// 		task={this.state.task}
			// 		id={this.props.id}
			// 		updateTodo={this.handleUpdate}
			// 	/>
			// );
			content = (
				<form className="EditTodoForm" onSubmit={this.handleUpdate}>
					<input
						type="text"
						name="task"
						value={this.state.task}
						onChange={this.handleChange}
					/>
					<button>Save</button>
				</form>
			);
		} else {
			content = <span className="note">{this.state.task}</span>;
		}

		return (
			<div className={classes} onClick={this.handleToggleDone}>
				{content}
				<div className="Todo-btns">
					<span className="Todo-remove" onClick={this.handleRemove}>
						Remove
					</span>
					<span className="Todo-edit" onClick={this.handleToggleEdit}>
						Edit
					</span>
				</div>
			</div>
		);
	}
}

{
	/* <div className={classes} onClick={this.handleToggleDone}>
{content}
<div className="Todo-btns">
  <span onClick={this.props.removeTodo} className="Todo-remove">
    Remove
  </span>
  <span onClick={this.handleToggleEdit} className="Todo-edit">
    Edit
  </span>
</div>
</div> */
}
