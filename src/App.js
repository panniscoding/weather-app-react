import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
        <footer>
          This project was coded by Pann and is
          <a
            href="https://github.com/panniscoding/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
