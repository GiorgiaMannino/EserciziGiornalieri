import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import searchResultsReducer from "../reducers/searchResultsReducer";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    searchResults: searchResultsReducer,
  },
});

export default store;
