import React, { useContext } from "react";
import LocationAndDate from "./components/LocationAndDate";
import CurrentTemp from "./components/CurrentTemp";
import CurrentStats from "./components/CurrentStats";
import WeatherByHours from "./components/WeatherByHours";
import NextFiveDays from "./components/NextFiveDays";
import { Weather } from "./Store/Context";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  const { loading } = useContext(Weather);
  return (
    <main className="flex flex-wrap p-4 lg:w-[880px] lg:my-2 lg:mx-auto lg:text-[1.1em]">
      {loading ? (
        <Loading />
      ) : (
        <>
          <LocationAndDate />
          <CurrentTemp />
          <CurrentStats />
          <WeatherByHours />
          <NextFiveDays />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
