import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    
    const [ { description }, handleInputChanges, reset] = useForm({
        description: ''
    });

    const handleSubmit = ( e ) => {
        
        e.preventDefault();
        
        if( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,    
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        
        handleAddTodo( newTodo );
        reset();
    }
    
    return (
        <>
            <h4>Agregar Todo</h4>
            <hr/>
            <form onSubmit={ handleSubmit } >
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="aprender.."
                    autoComplete="off"
                    onChange={ handleInputChanges }
                    value={ description }

                />
                <button
                    className="btn btn-outline-primary mt-1 btn-block"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
