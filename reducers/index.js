import { actions } from '../actions'

const reducer = (state, action) => {
    switch (action.type) {
        case actions.addTodo:
            const d = new Date()
            const date = d.getDay() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.todoList.length + 1,
                        name: action.payload.name,
                        description: action.payload.description,
                        created: date,
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
        case actions.searchTodo:
            console.log("searchTodo")
            return {
                ...state,
                todo: state.todoList.find(item => item.id == action.payload),
            }
        case actions.editTodo:
            let todosAux = state.todoList.filter(items => items.id !== action.payload.id)
            let newTodo = state.todoList.find(item => item.id == action.payload.id)
            newTodo.id = action.payload.id
            newTodo.name = action.payload.name
            newTodo.description = action.payload.description
            newTodo.done = action.payload.done

            return {
                ...state,
                todoList: todosAux.concat(newTodo),
                todo: newTodo,
            }
        case actions.setOption:
            return {
                ...state,
                option: action.payload
            }
        default:
            return state
    }
}


export default reducer;