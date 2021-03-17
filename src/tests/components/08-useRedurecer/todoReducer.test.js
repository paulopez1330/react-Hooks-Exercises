
import { todoReducer } from "../../../components/08-useRedurecer/todoReducer";
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas en todoRducer', () => {
        
    test('debe retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {});

        expect( state ).toEqual( demoTodos );
    })

    test('debe de agregar un todo', () => {
        
        const newTodo = {
            id: 3,
            desc: 'Aprender .net',
            done: false
        }

        const state = todoReducer(demoTodos, {
            type:'add',
            payload:newTodo
        });

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [ ...demoTodos, newTodo ] );
    })

    test('debe de borrar un todo', () => {

        const state = todoReducer(demoTodos, {
            type: 'delete',
            payload: 1
        });

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[1] ] );
    })

    test('debe de hacer el TOGGLE del todo', () => {

        const state = todoReducer(demoTodos, {
            type: 'toggle',
            payload: 1
        });

        expect( state[0].done ).toBe( true );
        expect( state[1].done ).toBe( true );
    })
    
})
