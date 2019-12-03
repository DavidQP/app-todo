import React, { Component } from 'react';

//css 
import './TaskForm.css';

class TaskForm extends Component {
	state = {
		title: '',
		body: ''
	}

	onChange = (e) => {
		const {name, value} = e.target;
		this.setState({
			[name]: value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTask(this.state.title,this.state.body);
		this.setState({
			title: '',
			body: ''
		});
	} 

	render(){
		return(
			<form onSubmit={this.onSubmit}>
				<div className="form-group">	
					<input className="form-control" type="text" placeholder="Ingrese titulo" name="title" value={this.state.title} onChange={this.onChange} />
				</div>
				<div className="form-group">	
					<textarea className="form-control" placeholder="Ingrese descripcion" name="body" value={this.state.body} onChange={this.onChange} />
				</div>				
				<button className="btn btn-success" type="submit">Enviar</button>
			</form>
		);
	}
}

export default TaskForm;