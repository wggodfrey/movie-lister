import React from 'react';
import store from '../store/store.js';
//components
import MovieListContainer from '../containers/MovieList.js';
//actions
import { setMovies } from './../actions/movies.js';
import { setInput } from './../actions/input.js';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //default state
    let movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];
    let input = '';
    //initialize state
    store.dispatch(setMovies(movies));
    store.dispatch(setInput(input));
  }

  render() {
  	return(
	    <div className="list-holder">
	    	<MovieListContainer />
	    </div>
  	);
  }
}
