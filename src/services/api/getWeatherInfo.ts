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
    return null
  };
};

export default getWeatherInfo;
