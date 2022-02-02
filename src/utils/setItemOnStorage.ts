import AsyncStorage from "@react-native-async-storage/async-storage";

import IStorage from "../types/storage";
import getItemFromStorage from "./getItemFromStorage";
import removeItemFromStorage from "./removeItemFromStorage";

async function setItemOnStorage(item: IStorage, value: any): Promise<void> {
  const stored = await getItemFromStorage(item);
  if (stored) {
    await removeItemFromStorage([item]);
  };

  await AsyncStorage.setItem(item, JSON.stringify(value));
}

export default setItemOnStorage;
