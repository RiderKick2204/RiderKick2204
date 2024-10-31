import { useContext } from 'react';
import { ThemeContext } from './Parents';

const Content = () => {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h1>Welcome to the Seminar</h1>
            <p>This is the content of the seminar.</p>
        </div>
    );
};

export default Content;