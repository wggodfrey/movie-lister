import React from 'react';

const MovieListItem = (props) => {
  console.log(props)
  return (
  	<div className="list-item">
      <i className={ props.movie.watched === true? "material-icons done": "material-icons todo" } onClick={ ()=> props.handleToggleWatchedStatusClick(props.movie) }>{ props.movie.watched === true? "done": "visibility" }</i>
  		<span>{props.movie.title}</span>
  		<i className="material-icons close" onClick={ ()=> props.handleRemoveMovieButtonClick(props.movie) }>close</i>
  	</div>
  )
}; 

export default MovieListItem;