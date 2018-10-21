import React from 'react';

const MovieListController = (props) => (
  <div className="list-controller">
    <div className="search-field"><input placeholder="Search List" onChange={(e) => props.handleInputChange(e.target.value)}></input></div>
    <div className="filter-button"><i className="material-icons filter" onClick={()=> { console.log('hi')}}>filter_list</i></div>
  </div>
); 

export default MovieListController;