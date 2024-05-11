import React, { createContext, useState, useEffect, useCallback } from "react";
import { fetchWeatherForecast, fetchWeatherLocations } from "../config/config";
import { debounce } from "lodash";

export const Weather = createContext(null);

const Context = ({ children }) => {
  // const [showSearch, setShowSearch] = useState(false);
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLocation = (loc) => {
    setLocations([]);
    setLoading(true);
    fetchWeatherForecast({
      cityName: loc.name,
      days: "8",
    }).then((data) => {
      setWeather(data);
      setLoading(false);
      console.log(data);
    });
  };

  const handleSearch = (e) => {
    let text = e.target.value
    console.log(text)
    if (text.length > 2) {
      fetchWeatherLocations({ cityName: text }).then((data) => {
        setLocations(data);
        handleTextDebounce();
      });
    }
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    fetchWeatherForecast({
      cityName: "Malegaon",
      days: "7",
    }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

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
