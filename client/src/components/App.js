import React from 'react';
import store from '../store/store.js';
//components
import MovieListContainer from '../containers/MovieList.js';
import MovieEntryField from '../containers/MovieEntryField.js';
//actions
import { setMovies } from './../actions/movies.js';
import { setInput } from './../actions/input.js';
import { setFilters } from './../actions/filters.js';

export default class App extends React.Component {

  componentWillMount() {
    //default state
    let movies = [
      {title: 'Mean Girls', watched: true},
      {title: 'Hackers', watched: false},
      {title: 'The Grey', watched: true},
      {title: 'Sunshine', watched: false},
      {title: 'Ex Machina', watched: true},
    ];
    let input = '';
    let filters = {
      watched: false,
      unwatched: false,
    }
    //initialize state
    store.dispatch(setMovies(movies));
    store.dispatch(setFilters(filters));
    store.dispatch(setInput(input));
  }

  render() {
  	return(
      <div>
        <div id="banner">Movie Lister</div>
        <div className="inner-wrapper">
            <MovieEntryField />
          <MovieListContainer />
        </div>
      </div>
  	);
  }
}

//egg head tutorial
