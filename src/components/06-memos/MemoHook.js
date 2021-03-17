import React, { useMemo, useState } from 'react';
import { useCounter } from "../../hooks/useCounter";

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    
    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true);

    const procesoPesado = ( iteraciones ) => {
        
        for ( let i = 0; i < iteraciones; i ++ ) {
            console.log('gdfgd');
        }
    }

    const momoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);

    return (                
        <div>
            <h3>Counter: <small> { counter } </small></h3>
            <hr />
            <p> { momoProcesoPesado } </p>
            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => setShow(!show)}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
