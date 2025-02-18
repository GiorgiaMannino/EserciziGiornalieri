export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const addFavourite = (job) => ({
  type: ADD_FAVOURITE,
  payload: job,
});

export const removeFavourite = (jobId) => ({
  type: REMOVE_FAVOURITE,
  payload: jobId,
});

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
});

/* export const asyncActionCreator = ( ) => {
    return async (dispatchEvent, getState) => {
        // fetch...
        dispatch ({
            type: "get"
        })
    }
} */

/*     export const fetchJobs = (query) => {
        return async (dispatch) => {
          try {
            const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
            if (response.ok) {
              const { data } = await response.json();
              dispatch(setJobs(data));
            } else {
              alert("Error fetching jobs");
            }
          } catch (error) {
            console.error(error);
          }
        };
      }; */
