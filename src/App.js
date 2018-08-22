import React, {Component} from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "c22231fe138cd14631dd69760876c6de"

class App extends Component {

    getWeather = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);

    }

    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather />
            </div>
        );
    }
}

export default App;