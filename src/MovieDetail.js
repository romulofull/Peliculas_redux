
import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetail = () => {
  const { trailer, loading } = useSelector(state => state);

  return (
    <div className="movie-detail">
      {loading && <p>Loading trailer...</p>}
      {trailer && trailer.key && (
        <div>
          <h3>Trailer</h3>
          <iframe
            title="Movie Trailer"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
