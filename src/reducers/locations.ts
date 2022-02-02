import Actions from "../types/actions";
import IStorage from "../types/storage";
import setItemOnStorage from "../utils/setItemOnStorage";

const locationsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.ADD_LOCATION: {
      const { location } = payload;
      const locations = [...state, location];
      setItemOnStorage(IStorage.LOCATIONS, locations);
      return locations;
    }
    case Actions.REMOVE_LOCATION: {
      const { woeid } = payload;
      const locations = state.filter((item) => item.woeid !== woeid);
      return locations;
    }
    default: {
      return state;
    }
  }
};

export default locationsReducer;
