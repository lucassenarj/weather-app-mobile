import Actions from "../types/actions";
import IStorage from "../types/storage";
import setItemOnStorage from "../utils/setItemOnStorage";

const placeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.SELECT_PLACE: {
      const { place } = payload;
      setItemOnStorage(IStorage.PLACE, place);
      return place;
    }
    default: {
      return state;
    }
  }
};

export default placeReducer;
