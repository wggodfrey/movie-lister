import React from 'react';

const MovieSearchField = (props) => (
  <div>
    <input placeholder="Search" onChange={(e) => props.handleInputChange(e.target.value)} className="search-field"></input>
  </div>
); 

export default MovieSearchField;