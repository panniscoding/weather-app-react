import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperatrue = Math.round(props.data.temp.max);
    return "${temperature}º";
  }
  function minTemperature() {
    let temperatrue = Math.round(props.data.temp.min);
    return "${temperature}º";
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = data.getDate();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
