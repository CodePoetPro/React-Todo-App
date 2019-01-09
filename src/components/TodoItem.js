import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration : this.props.todo.completed ? 
      'line-through' : 'none'
    }
  }

  render() {
    const {title, id} = this.props.todo;
    return (
      <div className="item" style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}/>
        <span>{title}</span>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

//Style


export default TodoItem
