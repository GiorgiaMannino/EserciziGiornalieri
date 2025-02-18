import { SET_JOBS } from "../actions";

const initialState = [];

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return action.payload;
    default:
      return state;
  }
};

export default jobsReducer;
