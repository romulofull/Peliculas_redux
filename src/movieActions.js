
import axios from 'axios';

const api_key = process.env.REACT_APP_APIKEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = () => async dispatch => {
  dispatch({ type: 'FETCH_MOVIES_REQUEST' });

  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_APIKEY,
        sort_by: 'popularity.desc', 
      },
    });
    dispatch({
      type: 'FETCH_MOVIES_SUCCESS',
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_MOVIES_FAILURE',
      error: error.message,
    });
  }
};


export const fetchTrailer = movieId => async dispatch => {
  dispatch({ type: 'FETCH_TRAILER_REQUEST' });

  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
      params: {
        api_key: process.env.REACT_APP_APIKEY,
      },
    });
    dispatch({
      type: 'FETCH_TRAILER_SUCCESS',
      payload: response.data.results[0] || {}, 
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_TRAILER_FAILURE',
      error: error.message,
    });
  }
};
