const initialState = {
  main: {
    count: 0,
  },
  favourites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        main: {
          ...state.main,
          count: state.main.count + action.payload,
        },
      };
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((job) => job._id !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
