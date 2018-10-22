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
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:3000/movies',
      success: (movies) => {
        store.dispatch(setMovies(movies));
        store.dispatch(setFilters({ watched: false, unwatched: false }));
        store.dispatch(setInput(''));
      }
    });
    
  }

  componentDidMount() {
    document.addEventListener('click',(e) => {
      if (!event.target.matches('.more-embedded')) {
        let dropdowns = document.getElementsByClassName('item-options');
        for (let i = 0; i < dropdowns.length; i++) {
          if (dropdowns[i].classList.contains('show')) {
            dropdowns[i].classList.remove('show');
          }
        }
        $('.more-embedded').css({ pointerEvents: 'all' });
      }
    });
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
