
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useRedurecer/TodoListItem';
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo= { demoTodos[0] }
            index= { 0 }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />
    );

    test('debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de llamar la funcion handleDelete', () => {
    
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    })

    test('debe de llamar la funcion handleToggle', () => {
    
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    })

    test('debe demostrar el texto correctamente', () => {    

        expect(wrapper.find('p').text() ).toBe( `${1} - ${demoTodos[0].desc}` );
    })

    test('debe tener la clase complete', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo= { todo }
                index= { 0 }
                handleDelete = { handleDelete }
                handleToggle = { handleToggle }
            />
        );
        
        
        expect(wrapper.find('p').hasClass('complete') ).toBe( true );
    })
})
