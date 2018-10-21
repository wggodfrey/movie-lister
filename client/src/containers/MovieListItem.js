import { connect } from 'react-redux';
import MovieListItem from './../components/MovieListItem.js';
import { removeMovie, toggleWatched } from './../actions/movies.js';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    handleRemoveMovieButtonClick: (movie) => {
      dispatch(removeMovie(movie.title));
    },
    handleToggleWatchedStatusClick: (movie) => {
      dispatch(toggleWatched(movie.title));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
