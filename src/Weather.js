import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ show: false });

  function handleResponse(response) {
    setWeatherData({
      show: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSumit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.show) {
    return (
      <div className="Weather">
        <form onSubmit={handleSumit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
