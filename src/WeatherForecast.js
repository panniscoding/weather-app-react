import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
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
