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
      $.ajax({
        type: 'DELETE',
        url: 'http://127.0.0.1:3000/movie',
        data: {title: movie.title},
        dataType: 'json',
        success: () => {
          dispatch(removeMovie(movie.title));
        },
        error: (err) => {
          alert('something went wrong: ', err);
        }
      });
    },
    handleToggleWatchedStatusClick: (movie) => {
      dispatch(toggleWatched(movie.title));
    },
    dropOptions: (e) => {
      $('.more-embedded').css({ pointerEvents: 'none' });
      let item = $(e.target).parent()[0];
      let opts = item.getElementsByClassName('item-options')[0];
      opts.classList.add('show');
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
