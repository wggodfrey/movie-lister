import { connect } from 'react-redux';
import MovieListController from './../components/MovieListController.js';
import { setInput } from './../actions/input.js';

const mapStateToProps = (state) => {
  return {
    input: state.input,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    handleInputChange: (text) => {
      dispatch(setInput(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListController);
