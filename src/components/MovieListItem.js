import React from 'react';

const MovieListItem = (props) => (
	<div className="list-item">
		<span>{props.movie.title}</span>
		<i className="material-icons close">close</i>
	</div>
); 

export default MovieListItem;