import React, {Component} from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "c22231fe138cd14631dd69760876c6de"

class App extends Component {

    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
        const data = await api_call.json();
        
        if (city && country) {
            this.setState({
              temperature: data.main.temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
              error: ""
            });
        } else {
            this.setState({
            city: undefined,
            country: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            error: 'Field cannot be blank'
            })
        };
    

        document.getElementById("form").reset();
    }

    render() {
        return (
            <div>
                <Titles />

                <Form
                    getWeather = {this.getWeather}
                />

                <Weather
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    icon = {this.state.icon}
                    error = {this.state.error}
                />
            </div>
        );
    }
}

export default App;