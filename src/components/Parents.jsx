import Child from './Child';
import '../style/Parents.css';

import { useState, createContext } from 'react';
export const ThemeContext = createContext();

const Parents = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={theme}>
            <div className="container">
                <h1>Hello from Parents Component</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Child />
            </div>
        </ThemeContext.Provider>
    );
};

export default Parents;