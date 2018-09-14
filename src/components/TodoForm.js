import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import todoActions from './actions/todoActions';

class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ newTodo: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.addTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }

}


export default connect(null, { addTodo}}) (TodoForm)
