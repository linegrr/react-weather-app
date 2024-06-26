import React, { useState } from "react"; 
import "./Weather.css";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response) {
    setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name });

    }
function search() {
const apiKey = "6f578b96aa9505bcce148ac22cb85794";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

        }
function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);


}



if (weatherData.ready) {
return (
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary " />
        </div>
      </div>
    </form>
    <WeatherInfo data={weatherData}/>
    <WeatherForecast  coordinates={weatherData.coordinates}/>
  </div>
);
} else {
search();
return "Loading..";

}
}