import React from 'react';

// Using "stateless functional" syntax because this component does not contain state
const Form = props => (
    <div>
        <form onSubmit={props.getWeather} id="form">
            <input type="text" name="city" placeholder="City..."/><br />
            <input type="text" name="country" placeholder="Country..."/><br />
            <button>Get Weather</button>
        </form>
    </div> 
)

export default Form;