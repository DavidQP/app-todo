import React from 'react';

function Task(props) {
	const title = props.task.title;
	const body = props.task.body;
	const done = props.task.done;
	return(
		<div className="card col-4 mt-3">
			<h2 className="card-title">{title}</h2>
			<p>{body}</p>
			<p>
				{done? 
					(<p>Tarea terminada</p>): 
					(<p>Terminar tarea? <input type="checkbox" onChange={props.taskDone.bind(this, props.task.id)} /></p>) }
			</p>
			<button className="align-self-center btn btn-danger" onClick={props.deleteTask.bind(this, props.task.id)}>Eliminar</button>
		</div>
	);
}

export default Task;