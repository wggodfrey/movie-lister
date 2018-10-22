import React from 'react';

const MovieListItem = (props) => {
  return (
  	<div className="list-item">
      <span>{ props.movie.title }</span><i className="material-icons more-embedded" onClick={ props.dropOptions }>more_horiz</i>
      <div className="item-options">
        <i className="material-icons remove" onClick={ () => props.handleRemoveMovieButtonClick(props.movie) }>close</i>
        <i className={ props.movie.watched === 1? "material-icons done": "material-icons todo" } onClick={  () => props.handleToggleWatchedStatusClick(props.movie) }>done</i>
      </div>
    </div>
  )
}; 

export default MovieListItem;