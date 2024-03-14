/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import getCountry from "../services/country";

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCountry
      .getWeather(country.capital)
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.error("Error getting weather:", error));
  }, []);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <ul>
        <h2>Languages</h2>
        {Object.entries(country.languages).map(([abbreviation, name]) => (
          <li key={abbreviation}>
            {abbreviation}: {name}
          </li>
        ))}
      </ul>
      <img src={country.flags.png} />

      <h3>Weather in {country.capital}</h3>
      {weather ? (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Weather Conditions: {weather.weather[0].main}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather icon"
          />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};
export default CountryDetails;
