import React, { useState, useRef } from 'react';

//TodoApp component

function FourthPage() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null); // Create a ref for the input element

    // Handler to add a new task
    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = inputRef.current.value.trim();
        if (newTodo) {
            setTodos([...todos, newTodo]);
            inputRef.current.value = ''; // Clear the input field
        }
        inputRef.current.focus(); // Automatically focus the input field after submission
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>
                <input type="text" ref={inputRef} placeholder="Add a new task" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default FourthPage;
