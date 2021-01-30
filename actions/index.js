export const actions = {
    addTodo: 'ADD_TODO',
    deleteTodo: 'DELETE_TODO',
    editTodo: 'EDIT_TODO',
}

export const addTodo = payload => ({
    type: actions.addTodo,
    payload,
});

export const deleteTodo = payload => ({
    type: actions.deleteTodo,
    payload,
});