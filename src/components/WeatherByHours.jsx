import React, { useContext, useState } from "react";
import { Weather } from "../Store/Context";
import { generateIcon } from "../config/generateIcon";

const WeatherItem = ({ hours, icon, temp, altTitle }) => (
  <div className="bg-black/30 rounded-md px-2 py-4 text-[1.125em] text-center space-y-1 flex flex-col justify-between">
    <p>{hours}</p>
    <div className="p-4">
      <img src={icon} alt={altTitle} className="w-full h-full object-cover" />
    </div>
    <p>{temp}</p>
  </div>
);

const WeatherByHours = () => {
  const { weather } = useContext(Weather);
  const { forecast } = weather;

  const [hour, setHour] = useState([
    forecast.forecastday[0].hour[15],
    forecast.forecastday[0].hour[18],
    forecast.forecastday[0].hour[21],
    forecast.forecastday[0].hour[0],
    forecast.forecastday[0].hour[3],
    forecast.forecastday[0].hour[6],
    forecast.forecastday[0].hour[9],
  ]);
  return (
    <div className="hidden w-full md:block mt-4">
      <h2 className="text-[1em] text-white/50 md:text-[1.125em] py-2">
        Today Weather
      </h2>
      <div className="flex justify-between gap-2">
        {hour.map((item, index) => {
          const icon = generateIcon(item.condition.icon);
          const date = new Date(item.time);

          const hours24 = date.getHours(); 
          const minutes = date.getMinutes(); 

          const hours12 = hours24 % 12 || 12; 
          const amPm = hours24 >= 12 ? "PM" : "AM";

          const formattedMinutes = minutes.toString().padStart(2, "0");

          const formattedTime = `${hours12}:${formattedMinutes} ${amPm}`;

          return (
            <WeatherItem
              key={index}
              hours={formattedTime}
              icon={icon}
              altTitle={item.condition.text}
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
