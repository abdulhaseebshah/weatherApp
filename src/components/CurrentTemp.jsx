import React, { useContext } from "react";
import weatherIcon from "../assets/icon.png";
import { Weather } from "../Store/Context";

const CurrentTemp = () => {
  const { weather } = useContext(Weather);
  const { current, forecast } = weather;
  console.log(forecast.forecastday[0].astro.sunrise);
  return (
    <div className="flex w-full mt-[0.25em] md:w-1/2 items-center">
      <div className="flex-grow-[1.25em] text-center p-4">
        <img src={`https:${current.condition.icon}`} alt="" className="w-[150px]" />
      </div>
      <div className="flex-grow-[1] text-center">
        <h2 className="text-[5.25em] font-light leading-none">{current.temp_c.toFixed(0)}&deg;</h2>
        <p className="text-[1.125em]">{current.condition.text}</p>
      </div>
    </div>
  );
};

export default CurrentTemp;
