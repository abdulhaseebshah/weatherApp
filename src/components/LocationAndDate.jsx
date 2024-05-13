import React, { useContext } from "react";
import SearchBox from "./SearchBox";
import { Weather } from "../Store/Context";

const LocationAndDate = () => {
  const { weather } = useContext(Weather);
  const { location } = weather;
  return (
    <div className="w-full flex md:items-end flex-wrap-reverse">
      <div className="flex-1">
        <h2 className="text-[1.8em] mb-1">
          {location.name}, <span className="text-[.7em] text-white/50 font-normal">
            {location.country}
          </span>
        </h2>
        <p>{location.localtime.split(" ")[0]}</p>
      </div>
      <SearchBox />
    </div>
  );
};

export default LocationAndDate;
