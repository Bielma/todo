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
                        description: action.payload.description
                    }
                ]

            }

        default:
            return state
    }
}


export default reducer;