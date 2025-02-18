import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer"; // Importa il reducer per i preferiti
import searchResultsReducer from "../reducers/searchResultsReducer"; // Importa il reducer per i risultati di ricerca

const store = configureStore({
  reducer: {
    favourites: favouritesReducer, // Aggiungi il reducer per i preferiti
    searchResults: searchResultsReducer, // Aggiungi il reducer per i risultati di ricerca
  },
});

export default store;
