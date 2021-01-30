import { actions } from '../actions'

const reducer = (state, action) => {
    switch (action.type) {
        case actions.addTodo:
            return {
                ...state,
                todos

            }
        default:
            return state
    }
}


export default reducer;