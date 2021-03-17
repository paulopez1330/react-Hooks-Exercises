import React from 'react';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useRedurecer/TodoApp';
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {

    const wrapper = mount( <TodoApp /> );

    Storage.prototype.setItem = jest.fn( () => {});

    test('debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe agregar un todo', () => {    
        
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });
        
        expect( wrapper.find('h1').text.trim() ).toBe('TodoApp ( 2 )');
        expect( localStorage.setItem ).toHaveBeenCalledTimes( 2 );
    });

    test('debe de eliminar un todo', () => {
                
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );
        });
        
        expect( wrapper.find('h1').text.trim() ).toBe('TodoApp ( 0 )');        
    });
})
