import axios from "axios";

const allCountries = `https://studies.cs.helsinki.fi/restcountries/api/all`;
const api_key = import.meta.env.VITE_SOME_KEY;

const getAllCountries = () => {
  return axios.get(allCountries);
};

const getWeather = (city) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export default {
  getAllCountries: getAllCountries,
  getWeather: getWeather,
};
