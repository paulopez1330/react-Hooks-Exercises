import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useRedurecer/TodoList';
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        
        <TodoList
            todos= { demoTodos }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />
    );

    test('debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe tener 2 <TodoListItem />', () => {
            
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length )

        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
    })
})
