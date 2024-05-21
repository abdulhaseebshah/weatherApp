import React, { createContext, useState, useEffect, useCallback } from "react";
import {
  fetchWeatherForecast,
  fetchWeatherGeoLocations,
  fetchWeatherLocations,
} from "../config/config";
import { debounce } from "lodash";

export const Weather = createContext(null);

const Context = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyWeatherData = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetchWeatherGeoLocations({
        lat: latitude,
        lon: longitude,
        days: "8",
      }).then((data) => {
        setWeather(data);
        setLoading(false);
      });
    });
  };

  const handleLocation = (loc) => {
    setLocations([]);
    setLoading(true);
    fetchWeatherForecast({
      cityName: loc.name,
      days: "8",
    }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  const handleSearch = (e) => {
    if (e.target.value.length > 2) {
      fetchWeatherLocations({ cityName: e.target.value }).then((data) => {
        setLocations(data);
      });
    }
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const handleTextDebounce = useCallback(debounce(handleSearch, 100), []);

  return (
    <Weather.Provider
      value={{
        weather,
        locations,
        loading,
        handleTextDebounce,
        handleLocation,
      }}
    >
      {children}
    </Weather.Provider>
  );
};

export default Context;
