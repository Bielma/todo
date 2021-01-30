export const actions = {
    addTodo: 'ADD_TODO',
    deleteTodo: 'DELETE_TODO',
    editTodo: 'EDIT_TODO',
    getTodos: 'GET_TODO',
}

export const addTodo = payload => ({
    type: actions.addTodo,
    payload,
});