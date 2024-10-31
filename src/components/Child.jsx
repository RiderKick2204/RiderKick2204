import React from 'react';
import Content from './Content';
import '../style/Child.css';

const Child = () => {
    return (
        <div className="child">
            <h1>Hello from the Child Component!</h1>
            <Content />
        </div>
    );
};

export default Child;