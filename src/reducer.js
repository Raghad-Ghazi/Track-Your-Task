const initialState = {
    todos:[],
    done:[]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos:[...state.todos, action.payload]
            }
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'DONE':
            return {
                ...state,
                done:[...state.done, action.payload],
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }

         default :return state
    }
}

export default reducer