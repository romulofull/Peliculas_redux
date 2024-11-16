
const initialState = {
  movies: [],
  trailer: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
    case 'FETCH_TRAILER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'FETCH_TRAILER_SUCCESS':
      return {
        ...state,
        loading: false,
        trailer: action.payload,
      };
    case 'FETCH_MOVIES_FAILURE':
    case 'FETCH_TRAILER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default movieReducer;
