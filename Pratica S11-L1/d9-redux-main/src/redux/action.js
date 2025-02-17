export const increment = (value) => ({
  type: "INCREMENT",
  payload: value,
});

export const addFavourite = (companyName) => ({
  type: "ADD_FAVOURITE",
  payload: companyName,
});

export const removeFavourite = (companyName) => ({
  type: "REMOVE_FAVOURITE",
  payload: companyName,
});
