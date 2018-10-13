import { setInput } from './../actions/input.js';

const setMovies = (payload) => ({
  type: 'SET_MOVIES', 
  payload: payload
});

const addMovie = (payload) => ({
  type: 'ADD_MOVIE', 
  payload: payload
});

const removeMovie = (payload) => ({
  type: 'REMOVE_MOVIE', 
  payload: payload
});

export { setMovies, addMovie, removeMovie };
