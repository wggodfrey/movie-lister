import { connect } from 'react-redux';
import MovieListItem from './../components/MovieListItem.js';
import { removeMovie } from './../actions/movies.js';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    handleRemoveMovieButtonClick: (movie) => {
      console.log(movie);
      dispatch(removeMovie(movie.title));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
