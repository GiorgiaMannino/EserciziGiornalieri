import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../action";

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((job) => job._id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
