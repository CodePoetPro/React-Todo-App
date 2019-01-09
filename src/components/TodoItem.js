import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  render() {
    return (
      <div className="item" >
        <input type="checkbox" />
        <span>{this.props.todo.title}</span>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired
}

//Style


export default TodoItem
