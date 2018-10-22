import React from 'react';
import MovieListController from '../containers/MovieListController.js';
import MovieListItem from '../containers/MovieListItem';

const MovieList = (props) => {
  return (
    <div className="movie-list">
      <MovieListController />
      { 
        props.movies.map((movie, index) => {
          let title = movie.title.toLowerCase();
          let input = props.input.toLowerCase();
          if (title.indexOf(input) !== -1) {
            return (
              <MovieListItem 
                key={index}
                movie={movie}
              />
            );
          }
        })
      }
    </div>
  );
};

export default MovieList;
