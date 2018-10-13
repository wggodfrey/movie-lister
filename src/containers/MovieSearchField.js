import { connect } from 'react-redux';
import MovieSearchField from './../components/MovieSearchField.js';
import { setInput } from './../actions/input.js';

const mapStateToProps = (state) => {
  return {
  	input: state.input
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    handleInputChange: (text) => (dispatch(setInput(text)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchField);
