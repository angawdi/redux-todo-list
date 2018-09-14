const initialState = [{
	id: 0,
	task: 'Test your todo page',
	completed: true
}, {
	id: 1,
	task: 'Learn React',
	completed: false
}, {
	id: 2,
	task: 'Learn Redux',
	completed: false
}];

const todoReducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [...state, action.todo];
		case 'TOGGLE_TODO':
			const newState = state.map(todo =>{
				if (todo.id === action.id) {
					todo.completed = !todo.completed
				}
				return todo;
			})
			return newState;
		default:
			return state;
	}
}

export default todoReducer;