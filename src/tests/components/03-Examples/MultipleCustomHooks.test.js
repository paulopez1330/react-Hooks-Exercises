import React, {  } from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-Examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Prueba de <MultipleCustomHooks />', () => {
    
    test('debe mostrarse correctamente', () => {

        useCounter.mockReturnValue({
            counter: 10,
            increment:() => {}
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar informacion', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment:() => {}
        });
                
        useFetch.mockReturnValue({
            data: [{
                author: 'borges',
                quote: 'hola mundo'
            }],
            loading: false,
            error: null
        });        
        
        const wrapper = shallow( <MultipleCustomHooks /> );
        
        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'hola mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'borges' );
    })    
})