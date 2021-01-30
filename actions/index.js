export const actions = {
    addTodo: 'ADD_TODO',
    deleteTodo: 'DELETE_TODO',
    editTodo: 'EDIT_TODO',
    editDone: 'EDIT_DONE',
    searchTodo: 'SEARCH_TODO',
    setOption: 'SET_OPTION',
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

export const searchTodo = payload => ({
    type: actions.searchTodo,
    payload,
});
export const editTodo = payload => ({
    type: actions.editTodo,
    payload,
});

export const setOption = payload => ({
    type: actions.setOption,
    payload,
});