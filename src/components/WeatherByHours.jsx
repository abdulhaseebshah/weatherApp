import React, { useContext } from "react";
import weatherIcon from "../assets/icon.png";
import { Weather } from "../Store/Context";

const WeatherItem = ({ hours, icon, temp }) => (
  <div className="bg-black/30 rounded-md p-4 text-[1.125em] text-center space-y-1">
    <p>{hours}</p>
    <div className="p-2">
      <img
        src={weatherIcon}
        alt={icon}
        className="w-full h-full object-cover"
      />
    </div>
    <p>{temp}</p>
  </div>
);

const WeatherByHours = () => {
  const { weather } = useContext(Weather);
  const { forecast } = weather;
  // console.log(forecast.forecastday[0].hour);

  return (
    <div className="hidden w-full md:block mt-4">
      <h2 className="text-[1em] text-white/50 md:text-[1.125em] py-2">
        Today Weather
      </h2>
      <div className="flex justify-between gap-2">
        {/* {forecast.forecastday[0].hour.map((item) => {
          return <WeatherItem hours={item.time.split(" ")[1]} icon="Mosty" temp="21&deg;" />;
        })} */}
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
        <WeatherItem hours="3AM" icon="Mosty" temp="21&deg;" />
      </div>
    </div>
  );
};

export default WeatherByHours;
