import React, { useEffect, useState } from 'react';

const Example = (props) => {
    // useState return state variabe and function that allows to change state variable
    const [count, setCount] = useState(props.number);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])

    return (
        <div className="click_button">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(props.number)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}

export default Example;
