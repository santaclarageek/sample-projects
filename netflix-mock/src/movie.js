import React from "react";

const Movie = props => {
  return (
    <li>
      <div className="movie">
        <img src={props.movie.img} alt={props.movie.title} />
        <div className="title">
          <h4>{props.movie.title}</h4>
        </div>

        {props.add ? (
          <i
            className="fas fa-plus-circle btn"
            onClick={() => {
              props.add(props.movie);
            }}
          />
        ) : (
          <i
            className="fas fa-minus-circle btn"
            onClick={() => {
              props.remove(props.movie.id);
            }}
          />
        )}
      </div>
    </li>
  );
};

export default Movie;
