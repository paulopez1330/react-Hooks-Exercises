import React, { useEffect, useState } from 'react';

export const Message = () => {
    
    const [coors, setcoors] = useState( { x:0, y:0 } );

    const mouseMove = (e) => {
        const coors = { x: e.x, y: e.y };
        setcoors( coors );
    }

    useEffect(() => {
        
        window.addEventListener( 'mousemove', mouseMove );

        return () => {
            window.removeEventListener( 'mousemove', mouseMove );
        }
    }, [])
    
    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x: {coors.x}   y: {coors.y}
            </p>
        </div>
    )
}
