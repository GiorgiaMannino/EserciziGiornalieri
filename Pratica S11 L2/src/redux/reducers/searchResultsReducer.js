import { SET_SEARCH_RESULTS } from "../action";

const initialState = [];

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export default searchResultsReducer;
