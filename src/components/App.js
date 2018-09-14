import React, { Component } from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'

class App extends Component {
	constructor(){
		super()
		this.state = {
			 todos: []
		}
	}

	addTodo = (item) => {
		console.log('adding new item', item);
		let newItem = {
			id: this.state.todos.length,
			task: item,
			completed: false
		}
		let todosTemp = [...this.state.todos, newItem];
		this.setState({ todos: todosTemp })
	}

  render () {
    return (
      <div className="App">
        <h1>Redux TODOS!</h1>
        <TodoForm addTodo={this.addTodo} />
        <Todos items={this.state.todos} />
      </div>
    )
  }
}

export default App
