

const initialState = [{
    id:1,
    todo: 'comprar',
    done: false,
}];

const todoDeducer = ( state = initialState, action ) => {
    
    if( action?.type === 'agregar' ) {
        return [ ...state, action.payload ];
    }
    
    return state;
}

let todos = todoDeducer();

const newTodo = {
    id:2,
    todo: 'comprar',
    done: false,
}

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoDeducer( todos, action );