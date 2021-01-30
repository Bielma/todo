import { actions } from '../actions'

const reducer = (state, action) => {
    switch (action.type) {
        case actions.addTodo:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.todoList.length + 1,
                        name: action.payload.name,
                        description: action.payload.description,
                        done: false
                    }
                ]
            }
        case actions.deleteTodo:
            return {
                ...state,
                todoList: state.todoList.filter(items => items.id !== action.payload)
            }
        case actions.editDone:
            //delete
            let todos = state.todoList.filter(items => items.id !== action.payload)
            let nTodo = state.todoList.find(item => item.id == action.payload)
            nTodo.done = nTodo.done ? false : true

            return {
                ...state,
                todoList: todos.concat(nTodo)
            }
        default:
            return state
    }
}


export default reducer;