
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Prueba de useForm', () => {
    
    const initialForm = {
        name:'paulo',
        email:'paulo@paulo',
    };

    test('debe de reresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        
        const [ values, handleInputChange, reset ] = result.current;

        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        expect( typeof values ).toBe( 'object' );

        expect( values ).toEqual(initialForm);

    })

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );        
        const [ , handleInputChange ] = result.current;

        act( ()=> {
            handleInputChange({
                target:{
                    name:'name',
                    value:'new'
                }
            });
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name:'new' } );
    })
    
    test('debe resetear el formulario', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );        
        const [ values, handleInputChange, reset ] = result.current;

        act( ()=> {
            handleInputChange({
                target:{
                    name:'name',
                    value:'new'
                }
            });

            reset();
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );

    })
})
