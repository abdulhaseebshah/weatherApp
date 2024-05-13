import axios from "axios";

const apikey = import.meta.env.VITE_APIKEY || "5196d466329d4969b9471409240405";

const forecastEndpoint = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

const forecastLocationEndpoint = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${params.lat},${params.lon}&days=${params.days}&aqi=no&alerts=no`;

const locationsEndpoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apikey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err);
    return null;
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forecastEndpoint(params));
};

export const fetchWeatherLocations = (params) => {
  return apiCall(locationsEndpoint(params));
};
export const fetchWeatherGeoLocations = (params) => {
  return apiCall(forecastLocationEndpoint(params));
};

