// src/components/MovieList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchTrailer } from './movieActions';
import MovieDetail from './MovieDetail';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleClick = (movieId) => {
    dispatch(fetchTrailer(movieId));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => handleClick(movie.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      <MovieDetail />
    </div>
  );
};

export default MovieList;