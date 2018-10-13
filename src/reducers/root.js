import { combineReducers } from 'redux';
import moviesReducer from './movies.js';
import inputReducer from './input.js';

var rootReducer = combineReducers({ movies:moviesReducer, input:inputReducer });

export default rootReducer;