import { apiInstance } from ".";
import IResponse from "../../types/response";

async function searchWeatherByLatLong(lat: number, long: number) {
  try {
    const { status, data } = await apiInstance.get(`/search/?lattlong=${lat}, ${long}`);
    return {
      status,
      response: data,
    }
  } catch (error) {
    const { status } = error;
    return {
      status,
      response: "Error while fetching weather info",
    }
  };
};

export default searchWeatherByLatLong;
