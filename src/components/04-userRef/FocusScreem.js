import React, { useRef } from 'react'
import '../02-useEffect/effects.css';


export const FocusScreem = () => {

    const inputRef = useRef();

    const handleCllick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />
            <button
                className="btn btn-outline-primary mt-5"
                onClick={ handleCllick }
            >
                Focus
            </button>
        </div>
    )
}
