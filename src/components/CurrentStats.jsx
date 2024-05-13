import React, { useContext } from "react";
import { Weather } from "../Store/Context";

const StateBox = ({ value, label }) => (
  <div className="text-center w-[33.33%] py-4">
    <h2 className="text-[1.44em]">{value}</h2>
    <p className="text-white/50">{label}</p>
  </div>
);
const CurrentStats = () => {
  const { weather } = useContext(Weather);
  const { forecast } = weather;
  
  return (
    <div className="flex justify-around w-full border-t border-b md:mb-4 md:pb-0 md:border-t-0 md:border-b-0 md:border-l border-white/30 md:w-1/2 flex-wrap items-center mt-4">
      <StateBox
        value={forecast.forecastday[0].day.maxtemp_c.toFixed(0) + "°"}
        label="High"
      />
      <StateBox value={forecast.forecastday[0].day.maxwind_kph.toFixed(0) + " kph"} label="Wind" />
      <StateBox value={forecast.forecastday[0].astro.sunrise} label="Sunrise" />
      <StateBox value={forecast.forecastday[0].day.mintemp_c.toFixed(0) + "°"} label="Low" />
      <StateBox value={forecast.forecastday[0].day.daily_chance_of_rain + "%"} label="Rain" />
      <StateBox value={forecast.forecastday[0].astro.sunset} label="Sunset" />
    </div>
  );
};

export default CurrentStats;
