import React, { useContext, useEffect, useState } from "react";
import { Weather } from "../Store/Context";
import { weatherImages } from "../constant";

const WeatherItem = ({ hours, icon, temp }) => (
  <div className="bg-black/30 rounded-md p-4 text-[1.125em] text-center space-y-1">
    <p>{hours}</p>
    <div className="p-2">
      <img src={icon} alt={icon} className="w-full h-full object-cover" />
    </div>
    <p>{temp}</p>
  </div>
);

const WeatherByHours = () => {
  const { weather } = useContext(Weather);
  const { forecast } = weather;

  const [hour, setHour] = useState([
    forecast.forecastday[0].hour[3],
    forecast.forecastday[0].hour[6],
    forecast.forecastday[0].hour[9],
    forecast.forecastday[0].hour[12],
    forecast.forecastday[0].hour[16],
    forecast.forecastday[0].hour[19],
    forecast.forecastday[0].hour[12],
  ]);
  
  return (
    <div className="hidden w-full md:block mt-4">
      <h2 className="text-[1em] text-white/50 md:text-[1.125em] py-2">
        Today Weather
      </h2>
      <div className="flex justify-between gap-2">
        {hour.map((item, index) => {
          return (
            <WeatherItem
              key={index}
              hours={item.time.split(" ")[1]}
              icon={"https:" + item.condition.icon}
              temp={item.temp_c.toFixed(0) + "°"}
            />
          );
        })}
        {/* <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" /> */}
      </div>
    </div>
  );
};

export default WeatherByHours;
