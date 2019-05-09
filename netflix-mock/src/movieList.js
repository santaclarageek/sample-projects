import React from "react";

import Movie from "./movie";

const MovieList = props => {
  return (
    <div className="movie-list">
      <h2>{props.listTitle}</h2>
      <ul>
        {props.movies.map(movie => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
              add={props.add}
              remove={props.remove}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
