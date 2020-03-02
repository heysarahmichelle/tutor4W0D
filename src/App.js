import React, {Component}from 'react';
import './App.css';
import Taskadd from './components/Taskadd'
import Task from './components/Task'

class App extends Component {
  constructor(){
    super();
      this.state={
        tasks:[]
      }
  }
  addTasks=(task)=>{
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  render(){
    let toDoList=this.state.tasks.map((task) =>{
    return <Task task={task}/>
  })
  return (
    <div className="App">
      <div className="app-toolbar">
        <p>Login</p>
      </div>
        <p>Add Your Task Here</p>
      <div className="app-header">
       
        <Taskadd addTasks={this.addTasks}/>
      </div>
      <div>
        {toDoList}
        <Task/>
      </div>
    </div>
  );
}
}
export default App;
