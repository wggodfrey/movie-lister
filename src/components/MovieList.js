import React from 'react';
import MovieSearchField from '../containers/MovieSearchField.js';
import MovieEntryField from '../containers/MovieEntryField.js';
import MovieListItem from '../components/MovieListItem';

const MovieList = (props) => {
  return (
    <div className="movie-list">
      <div className="list-title">Movie List</div>
      <MovieSearchField />
      <MovieEntryField />
      { props.movies.map((movie, index) => {
          console.log(movie, index)
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
