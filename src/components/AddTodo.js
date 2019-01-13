import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTodo = (e) => {
        e.preventDefault();
       this.props.addTodo(this.state.title);
       this.setState({
           title: ''
       })
    }

    render() {
        return (
            <form style={{ width: '100%', padding: '10px 20px' }} onSubmit={this.addTodo}>
                <input
                    style={{ width: '100%', outline: 'none' }}
                    type='text'
                    name="title"
                    placeholder="Add Todo..."
                    onChange={this.onChange}
                    value={this.state.title}
                ></input>
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }

export default AddTodo
