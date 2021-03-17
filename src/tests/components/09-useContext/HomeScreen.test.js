import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Prueba de <HomeScreen />', () => {
    
    const user = {
        name: 'paulo lopez',
        email: 'paulo@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            < HomeScreen />
        </UserContext.Provider>
    );
    
    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })
    
})


