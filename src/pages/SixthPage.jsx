import React, { useState, useRef, useMemo } from 'react';

function AsyncCounter() {
    const [count, setCount] = useState(100);
    const intervalId = useRef();

    // let intervalId;

    const fibonacci = (n) => {
        if (n <= 1) {
            return 1;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    const result = useMemo(() => fibonacci(35), []);
    // const result = fibonacci(35);
    console.log({ result });
    const startCounter = () => {
        intervalId.current = setInterval(() => {
            if (count > 0) {
                setCount((prevCount) => prevCount - 1);
            }
        }, 1000);
    }

    const stopCounter = () => {
        clearInterval(intervalId.current);
        console.log({ intervalId });
    }


    return (
        <div>
            <p>Fibonacci n = 35 : {result}</p>
            <p>Count: {count}</p>
            <button onClick={startCounter}> Start </button>
            <button onClick={stopCounter}> Stop </button>
        </div>
    );
}

export default AsyncCounter;
