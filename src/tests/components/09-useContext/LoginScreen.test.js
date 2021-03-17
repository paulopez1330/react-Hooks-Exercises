import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Prueba de <LoginScreen />', () => {
    
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            < LoginScreen />
        </UserContext.Provider>
    );
    
    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe ejecutar el setUser', () => {
        
        wrapper.find('button').prop('onClick')();
        
        expect( setUser ).toHaveBeenCalledWith({
            id: 1, name:
            'Paulo'
        });
    })    
})