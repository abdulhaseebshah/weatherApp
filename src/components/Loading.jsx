import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white/70"></div>
    </div>
  );
};

export default Loading;
