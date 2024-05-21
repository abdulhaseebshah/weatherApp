import React, { useContext } from "react";
import searchIcon from "../assets/search-icon.png";
import { Weather } from "../Store/Context";
const SearchBox = () => {
  const { handleTextDebounce, handleLocation, locations } = useContext(Weather);
  
  return (
    <div className="relative w-full md:w-auto">
      <div className=" flex justify-between border border-white/40 rounded-full bg-black/30 px-4 mb-1">
        <input
          type="text"
          className="bg-transparent flex-1 outline-none py-3 placeholder:text-white/60 placeholder:font-light"
          placeholder="Search City..."
          onChange={handleTextDebounce}
        />
        <button className="rounded-full">
          <img src={searchIcon} className="w-4" alt="" />
        </button>
      </div>
      {locations.length > 0 && (
        <div className="bg-black/30 backdrop-blur-lg h-30 w-full rounded-3xl p-2 absolute z-50">
          {locations.map((loc, index) => {
            let borderClass = index + 1 != locations.length;
            return (
              <p
                key={index}
                onClick={() => handleLocation(loc)}
                className={`p-2 cursor-pointer ${
                  borderClass && "border-b border-b-white/20"
                }`}
              >
                {loc.name}, {loc.country}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
