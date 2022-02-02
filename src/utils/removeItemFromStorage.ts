import AsyncStorage from "@react-native-async-storage/async-storage";
import IStorage from "../types/storage";

function removeItemFromStorage(args: IStorage[]): boolean {
  try {
    args.map(async (item) => await AsyncStorage.removeItem(item));
    return true;
  } catch {
    return false;
  }
};

export default removeItemFromStorage;
