import React, { Component } from 'react';
import { todolist } from './shared/data';
import Todos from "./Todos";
import image from './shared/kaggle.png';
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
  render() {
    return (
      <div className="todo-app container">
        <image src={image} alt="image" />
        <h1 className="center blue-text">Affan Store</h1>
        <Todos todo={this.state.todo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
