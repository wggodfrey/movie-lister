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
        $.ajax({
          type: 'POST',
          url: 'http://127.0.0.1:3000/movie',
          data: { title: movie, watched: 0 },
          dataType: 'json',
          success: () => {
            dispatch(addMovie(movie));
          },
          error: (err) => {
            alert('Something went wrong: ', err);
          }
        });
        
      }
      document.getElementsByClassName('entry-field')[0].value = '';
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEntryField);
