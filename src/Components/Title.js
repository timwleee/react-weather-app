import React from 'react';

// Using "stateless functional" syntax because this component does not contain state
const Title = () => (
    <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <h3 className="title-container__subtitle">See the temperature for any location...</h3>
    </div>
);

export default Title;