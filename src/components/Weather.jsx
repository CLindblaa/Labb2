import React from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const WeatherInfo = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Weather = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (

    <WeatherContainer>
      {name && (
        <WeatherInfo>
          <h2>Väder för {name}</h2>
          <p>Temperatur: {Math.round(main.temp - 273.15)}°C</p>
          <p>Beskrivning: {capitalizeFirstLetter(weather[0].description)}</p>
        </WeatherInfo>
      )}
    </WeatherContainer>
  );
};

export default Weather;
