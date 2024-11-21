import React from 'react';
import { Link } from 'react-router-dom';

/*
const MovieList = (props) => {
  return (
	<>
  <div className="flex flex-wrap -mx-2">
    {props.movies.slice(0, 2).map((movie, index) => (
      <div className="w-1/2 px-2 mb-4" key={movie.imdbID}>
        <div className="image-container">
          <img src={movie.Poster} alt="movie" className="w-64 h-64 object-full" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay flex items-center justify-center"
          >
            <props.favouriteComponent />
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="flex flex-wrap -mx-2 mt-4">
    {props.movies.slice(2, 4).map((movie, index) => (
      <div className="w-1/2 px-2 mb-4" key={movie.imdbID}>
        <div className="image-container">
          <img src={movie.Poster} alt="movie" className="w-64 h-64 object-full" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay flex items-center justify-center"
          >
            <props.favouriteComponent />
          </div>
        </div>
      </div>
    ))}
  </div>
</>



  

  );*/
  const MovieList = (props) => {
	 return ( 
		<>
  <div className="overflow-x-auto">
  <div className="bg-gray-900 py-16">
  <div className="container mx-auto px-4">
  <div className="overflow-x-auto whitespace-nowrap">
    {props.movies.map((movie, index) => (
      <div key={movie.imdbID} className="inline-block bg-gray-400 p-4 rounded-lg m-2">
        <Link to={`/MovieDetails/${movie.imdbID}`}> 
          <img src={movie.Poster} alt={movie.Title} className="w-64 h-96 object-full" /> 
        </Link>
        <h2 className="text-xl font-bold">{movie.Title}</h2>
		<div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay flex items-center justify-center"
          >
            <props.favouriteComponent />
          </div>
      </div>
    ))}
  </div>
    </div>
    </div>
  </div>
</>
)
	  };


export default MovieList;

