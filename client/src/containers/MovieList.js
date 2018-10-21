import { connect } from 'react-redux';
import MovieList from './../components/MovieList.js';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    input: state.input
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    //props with dispatch actions
  };
};

export default connect(mapStateToProps, null)(MovieList);
