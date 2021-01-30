export const actions = {
    addTodo: 'ADD_TODO',
    deleteTodo: 'DELETE_TODO',
    editTodo: 'EDIT_TODO',
    editDone: 'EDIT_DONE',
}

export const addTodo = payload => ({
    type: actions.addTodo,
    payload,
});

export const deleteTodo = payload => ({
    type: actions.deleteTodo,
    payload,
});


export const editDone = payload => ({
    type: actions.editDone,
    payload,
});