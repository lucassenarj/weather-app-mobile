import Actions from "../types/actions";


const locationsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.ADD_LOCATION: {
      const { location } = payload;
      const locations = [...state, location];
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
