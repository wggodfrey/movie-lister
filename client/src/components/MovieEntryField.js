import React from 'react';

const MovieEntryField = (props) => (
	 <div className="api-searchbar">
		<input type="text" placeholder="Enter New Movie" className="entry-field"></input>
		<i className="material-icons create" onClick={() => props.handleAddMovieButtonClick(document.getElementsByClassName('entry-field')[0].value, props.movies) }>add</i>
	</div>
); 

export default MovieEntryField;