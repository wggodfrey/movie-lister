import { connect } from 'react-redux';
import MovieEntryField from './../components/MovieEntryField.js';
import { addMovie } from './../actions/movies.js';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    handleAddMovieButtonClick: (movie, movies) => {
      if (movie !== '' && movies.map((m) => { return m.title }).indexOf(movie) === -1) {
        dispatch(addMovie(movie));
      }
      document.getElementsByClassName('entry-field')[0].value = '';
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEntryField);
