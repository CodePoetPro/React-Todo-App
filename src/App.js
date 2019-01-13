import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Axios from 'axios';


class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res=>{
        this.setState({
          todos : [...res.data]
        })
      })
  }

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

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })
    })
  }

  addTodo = (title) => {
    const newTodo = {
      title,
      completed: false
    }
    Axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then(res => {
        this.setState({
          todos: [
            ...this.state.todos, res.data
          ]
        })
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} todos={this.state.todos} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
        </div>
      </Router>

    );
  }
}

export default App;
