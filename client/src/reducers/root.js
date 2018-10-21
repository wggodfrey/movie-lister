import { combineReducers } from 'redux';
import moviesReducer from './movies.js';
import inputReducer from './input.js';
import filtersReducer from './filters.js';

var rootReducer = combineReducers({ movies:moviesReducer, input:inputReducer, filters: filtersReducer });

export default rootReducer;