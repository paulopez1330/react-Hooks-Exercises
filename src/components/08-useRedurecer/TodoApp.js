import { useEffect, useReducer } from 'react';
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { todoReducer } from "./todoReducer";

import './styles.css';


export const TodoApp = () => {

    const init = () => {
        
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] =  useReducer( todoReducer, [], init );    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleDelete = ( todoId ) => {
        
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch( action );
    }

    const handleAddTodo =( newTodo ) => {
        
        dispatch( {
            type: 'add',
            payload: newTodo
        } );        
    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <div>
            <h1> TopoApp: ({ todos.length }) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos= { todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={ handleAddTodo } />
                </div>
            </div>
        </div>
    )
}
