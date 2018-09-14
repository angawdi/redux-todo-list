import React, { Component } from 'react';

class Todos extends Component {
  
  render () {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.task}: {todo.completed.toString()}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps, null)(Todos)
