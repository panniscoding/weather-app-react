import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let apiKey = "17t3ob19948f5f5bf884a243a9005805";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast-day">
      <div className="row">
        <div className="col">
          Thu
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">50</span>
            <span className="WeatherForecast-temperature-min">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
