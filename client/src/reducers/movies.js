import Redux from 'redux';

const movieReducer = (state = [], action) => {

  //copy state
  let _state = Object.assign([], state);

  //edit state
  switch(action.type) {

    case 'SET_MOVIES':
      return action.payload;

    case 'ADD_MOVIE':
      return _state.concat({ title: action.payload });

    case 'REMOVE_MOVIE':
      return _state.filter(function(m) { return m.title !== action.payload });

    case 'TOG_WATCHED':
      let _movie = _state.filter(function(m) { return m.title === action.payload })[0];
      _movie.watched = !_movie.watched;
      return _state;

    default:
      return state;
  };
};

export default movieReducer;
