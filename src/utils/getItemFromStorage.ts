import AsyncStorage from "@react-native-async-storage/async-storage";

import IStorage from "../types/storage";

async function getItemFromStorage(item: IStorage): Promise<any | false> {
  const stored = await AsyncStorage.getItem(item);

  if(stored) {
    return JSON.parse(stored);
  }

  return false;
}

export default getItemFromStorage;
