import React, { Component } from 'react';
import './App.css'
import Header from './components/Header';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'


class App extends Component {

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) =>{
    this.setState({
      todos: this.state.todos.filter((todo)=>{
        return todo.id !== id;
      })
    })
  }

  addTodo = (title)=>{
    let todo = {
      id : uuid.v4(),
      title,
      completed : false
    }
    this.setState({
      todos : [
        ...this.state.todos, todo
      ]
    })
  }

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Plan a meeting',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}  todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
