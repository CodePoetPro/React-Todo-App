import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
  }

  render() {
    const { title, id } = this.props.todo;
    return (
      <div className="item">
        <div>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
          <span style={this.getStyle()} className="item-title">{title}</span>
        </div>
        <button onClick={this.props.deleteTodo.bind(this, id)}> x </button>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
