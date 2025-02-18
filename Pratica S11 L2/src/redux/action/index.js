export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const addFavourite = (job) => ({
  type: ADD_FAVOURITE,
  payload: job,
});

export const removeFavourite = (jobId) => ({
  type: REMOVE_FAVOURITE,
  payload: jobId,
});

export const setSearchResults = (jobs) => ({
  type: SET_SEARCH_RESULTS,
  payload: jobs,
});

export const fetchSearchResults = (query) => async (dispatch) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  try {
    const response = await fetch(baseEndpoint + query + "&limit=20");
    if (response.ok) {
      const { data } = await response.json();
      if (data && data.length > 0) {
        dispatch(setSearchResults(data));
      } else {
        alert("No jobs found for your search");
        dispatch(setSearchResults([]));
      }
    } else {
      alert("Error fetching results");
    }
  } catch (error) {
    console.error(error);
  }
};
