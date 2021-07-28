import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
       { movies.map((movie, i) => <div key={i}>
                            <p>Title: {movie.title}</p>
                            <p>Time: {movie.time}</p>
                            Genres: <ul>{movie.genres.map((g, i) => <li key={i}>{g}</li>)}</ul>
                            </div>)}
    </div>
  );
};

export default Movies;
