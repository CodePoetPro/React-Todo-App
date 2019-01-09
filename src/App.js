import React, { Component } from 'react';
import Todos from './components/Todo';
import './App.css'


class App extends Component {

  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Plan a meeting',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos markCompleted={this.markCompleted} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
