import React, { useState } from 'react'
import { MultipleCustomHooks } from "../03-Examples/MultipleCustomHooks";

import '../02-useEffect/effects.css';

export const RealExampleRef = () => {    
    
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            { show && <MultipleCustomHooks /> }
            
            <button
                className="btn btn-primary mt-5"
                onClick={ () => { setShow( !show) } }                
            >
                Show/Hide
            </button>
        </div>
    )
}
