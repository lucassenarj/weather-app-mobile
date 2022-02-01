import Actions from "../types/actions";

const placeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.SELECT_PLACE: {
      const { place } = payload;
      return place;
    }
    default: {
      return state;
    }
  }
};

export default placeReducer;
