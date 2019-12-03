import React, { Component } from 'react';
// JSON
import tasks from './tasks.json';
// css
import './App.css';
//components
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

class App extends Component {
  state = {
    tasks: tasks
  }

  taskDone = (id) => {
    const newTasks = this.state.tasks.map( task => {
      if(task.id === id){
        task.done = !task.done;
      }
      return task;
    });

    this.setState({
      tasks: newTasks
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter( task => task.id !== id );
    this.setState({
      tasks: newTasks
    })
  }

  addTask = (title,body) => {
    console.log(title, body);
    const newTask = {
      id: this.state.tasks.length + 1,
      title: title,
      body: body,
      done: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  render(){
    return(
      <div>
        <h1>Formulario</h1>
        <TaskForm className="justify-content-center" addTask={this.addTask} />
        <Tasks tasks={this.state.tasks} taskDone={this.taskDone} deleteTask={this.deleteTask} />
      </div>
    );
  }
}


export default App;
