import { weatherImages } from "../constant";

export const generateIcon = (current) => {
  if (current === "//cdn.weatherapi.com/weather/64x64/day/113.png") {
    return weatherImages.sunny;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/night/113.png") {
    return weatherImages.clear;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/day/116.png") {
    return weatherImages.partycloudyday;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/night/116.png") {
    return weatherImages.partycloudynight;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/day/119.png") {
    return weatherImages.cloudy;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/night/119.png") {
    return weatherImages.cloudynight;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/day/122.png") {
    return weatherImages.overcast;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/night/122.png") {
    return weatherImages.overcast;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/day/143.png") {
    return weatherImages.mist;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/night/143.png") {
    return weatherImages.mist;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/day/176.png") {
    return weatherImages.patchyrainday;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/night/176.png") {
    return weatherImages.patchyrainnight;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/day/353.png") {
    return weatherImages.patchyrainday;
  } else if (current === "//cdn.weatherapi.com/weather/64x64/night/353.png") {
    return weatherImages.patchyrainnight;
  }else {
    return weatherImages.notfound;
  }
};
