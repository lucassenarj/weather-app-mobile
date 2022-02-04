import { apiInstance } from ".";
import IResponse from "../../types/response";

async function getWeatherInfo(id: number): Promise<IResponse> {
  try {
    const { status, data } = await apiInstance.get(`/${id}`);
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

export default getWeatherInfo;
