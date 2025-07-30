import React, { use } from 'react'
import { useEffect } from 'react'

function Counter() {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        console.log({ count });
    }, [count]);
    return (
        <div>
            <p>count is {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter