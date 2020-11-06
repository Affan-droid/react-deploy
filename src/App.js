import React, { Component } from 'react';
import { todolist } from './shared/data';
import Todos from "./Todos";
import image from './shared/kaggle.png';
import AddForm from './AddForm';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: todolist
    };

  }
  deleteTodo = (id) => {
    console.log(id);
    const todo = this.state.todo.filter(tododelete => {
      return tododelete.id !== id
    });
    this.setState({
      todo: todo
    })
  }
  Addtodo = (todos) => {
    todos.id=Math.random();  
    let todo = [...this.state.todo, todos];
    this.setState({
      todo:todo
    })
      
  }
  render() {
    return (
      <div className="todo-app container">
        <image src={image} alt="image" />
        <h1 className="center blue-text">Affan`s To Do List</h1>
        <h3  className="blue-text text-darken-2">Add or delete the to do list</h3>
        <Todos todo={this.state.todo} deleteTodo={this.deleteTodo} />
        <AddForm Addtodo={this.Addtodo}/>
      </div>
    );
  }
}

export default App;
