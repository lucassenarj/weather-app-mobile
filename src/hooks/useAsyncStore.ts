import IDistance from "../types/distance";
import IStorage from "../types/storage";
import ITemperature from "../types/temperature";
import getItemFromStorage from "../utils/getItemFromStorage";

async function useAsyncStore() {
  let settings = await getItemFromStorage(IStorage.SETTINGS);
  let place = await getItemFromStorage(IStorage.PLACE);
  let locations = await getItemFromStorage(IStorage.LOCATIONS);

  if(!settings) {
    settings = {
      distance: IDistance.KILOMETERS,
      temperature: ITemperature.CELSIUS,
    };
  };

  if(!locations) {
    locations = [];
  };

  if(!place) {
    place = {};
  };

  return {
    settings,
    place,
    locations,
  }
};

export default useAsyncStore;
