import React from "react";
import logo from "../assets/logo.png"
const Loading = () => {
  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center">
      <img src={logo} alt="Site Logo" className="w-32 md:w-44 animate-blinking" />
    </div>
  );
};

export default Loading;
