import uuid from 'uuid';

const addTodo = (task) => {
	return {
		type: 'ADD_TODO',
		todo: {
			id: uuid(),
			task, // task: task 
			completed: false
		}
	}
}

export function toggleTodo(id){
	return {
		type: 'TOGGLE_TODO',
		id: id
	}
}