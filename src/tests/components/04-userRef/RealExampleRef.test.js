import React, {  } from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-userRef/RealExampleRef';

describe('Prueba de <RealExampleRef />', () => {

    const wrapper = shallow( <RealExampleRef /> );

    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
    })

    test('debe de mostrarse componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    })
})