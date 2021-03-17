import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHooks = () => {
    
    const [counter, setCounter] = useState(10);

    const increment = useCallback(( num ) => {
        setCounter( c => c + num );
    }, [ setCounter ])
    
    return (
        <div>
            <h1>use Callback Hook: { counter }</h1>        
            <ShowIncrement increment={ increment } />
        </div>
    )
}
