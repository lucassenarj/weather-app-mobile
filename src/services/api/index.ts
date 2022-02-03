import axios from "axios";
import getWeatherInfo from "./getWeatherInfo";

export const apiInstance = axios.create({
  baseURL: "https://www.metaweather.com/api/location",
  headers: {
    'Content-Type': 'application/json',
  }
});

const api = {
  getWeatherInfo: async (id: number) => await getWeatherInfo(id),
};

export default api;
