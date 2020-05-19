import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard'

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
        <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
         <MovieCard title={title}  Director={director} MetaScore={metascore} stars={stars}/>

      {/*made the code less dry*/}
      {/* <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))} */}

   
    </div>
  );
}

export default MovieList;
