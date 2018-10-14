import Redux from 'redux';

//reducers for some state parameter
const movieReducer = (state = [], action) => {

  switch(action.type) {

    case 'SET_MOVIES':
      return action.payload;

    case 'ADD_MOVIE':
      return state.concat({ title: action.payload });

    case 'REMOVE_MOVIE':
      console.log(action.payload);
      return state.filter(function(m) { return m.title !== action.payload });

    default:
      return state;
  };
};

export default movieReducer;
