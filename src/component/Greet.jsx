import React, { useEffect } from 'react'

function Greet() {
    useEffect(() => {
        console.log("Component Mounted");
    }, []);
    return (
        <div>
            <h1> Greet Component!</h1>
        </div>
    )
}

export default Greet