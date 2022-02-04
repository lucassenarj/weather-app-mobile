import axios from "axios";
import getWeatherInfo from "./getWeatherInfo";
import searchWeatherByLatLong from "./searchWeatherByLatLong";

export const apiInstance = axios.create({
  baseURL: "https://www.metaweather.com/api/location",
  headers: {
    'Content-Type': 'application/json',
  }
});

const api = {
  getWeatherInfo: async (id: number) => await getWeatherInfo(id),
  searchWeatherByLatLong: async (lat: number, long: number) => await searchWeatherByLatLong(lat, long),
};

export default api;
