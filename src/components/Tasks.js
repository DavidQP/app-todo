import React from 'react';

// components
import Task from './Task'

function Tasks(props){
	console.log(props.tasks);
	props.tasks.map( task => console.log(task));
	return(
		<div className="container">
			<div className="row">
				{props.tasks.map( task => {
					return(
						<Task task={task} key={task.id} taskDone={props.taskDone} deleteTask={props.deleteTask} />
					);
				})}
			</div>
		</div>
	);
}

export default Tasks;

