export const addFavourite = (job) => ({
  type: "ADD_FAVOURITE",
  payload: job,
});

export const removeFavourite = (jobId) => ({
  type: "REMOVE_FAVOURITE",
  payload: jobId,
});
