import React, { useContext } from "react";
import { Weather } from "../Store/Context";
import { weatherImages } from "../constant";

const NextWeatherItem = ({ value, label }) => (
  <div className="w-[33.33%] md:w-[16.66%] p-2">
    <p>{value}</p>
    <p>{label}</p>
  </div>
);

const NextFiveDays = () => {
  const { weather } = useContext(Weather);
  const { current, forecast } = weather;
  return (
    <div className="w-full flex-wrap mt-4">
      <h2 className="text-[1.2em] text-white/50 md:text-[1.125em] py-2 ">
        Next 7 Days
      </h2>
      <div className="flex flex-wrap">
        {forecast.forecastday.map((item, index) => {
          let date = new Date(item.date);
          return (
            <div
              className="w-full flex flex-wrap justify-around items-center py-3 mb-2 text-center bg-black/30 rounded-md"
              key={index}
            >
              <NextWeatherItem
                value={date.toDateString().split(" ")[0]}
                label={date.toLocaleDateString().slice(0, 4)}
              />
              <div className="w-[33.33%] md:w-[16.66%] flex justify-center p-2">
                {/* <img
                  src={"https:" + item.day.condition.icon}
                  alt={item.day.condition.text}
                  className="w-[60px]"
                /> */}
                <img
                  src={ weatherImages[current.condition.text]}
                  alt={item.day.condition.text}
                  className="w-[60px]"
                />
              </div>
              <NextWeatherItem
                value={item.day.mintemp_c.toFixed(0) + "°"}
                label="Low"
              />
              
              <NextWeatherItem
                value={item.day.maxtemp_c.toFixed(0) + "°"}
                label="High"
              />
              <NextWeatherItem
                value={item.day.daily_chance_of_rain + "%"}
                label="Rain"
              />
              <NextWeatherItem
                value={item.day.maxwind_kph.toFixed(0) + " kph"}
                label="Wind"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NextFiveDays;
