import React, { useState } from 'react';

function FirstPage() {
    const [color, setColor] = useState('blue');
    const [count, setCount] = useState(0);

    const changeColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1> useState </h1>
            <h2 style={{ color: color }}>Color and Count Demo</h2>
            <button onClick={changeColor}>Change Color</button>
            <button onClick={incrementCount}>Increment Count</button>
            <p>Current Count: {count}</p>
        </div>
    );
};

export default FirstPage;