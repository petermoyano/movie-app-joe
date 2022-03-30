import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
        "Title": "The Lord of the Rings: The Fellowship of the Ring",
        "Year": "2001",
        "imdbID": "tt0120737",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    },
    {
        "Title": "The Lord of the Rings: The Return of the King",
        "Year": "2003",
        "imdbID": "tt0167260",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "The Lord of the Rings: The Two Towers",
        "Year": "2002",
        "imdbID": "tt0167261",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    }
  ]);

  const getMovieRequest = () => {
    const url="http://www.omdbapi.com/?s=lord&apikey=ca4d40cb";
    const response = fetch(url);
    const responseJson = response.json();
    console.log(responseJson)
  }


  return (
    <div className="container-fluid movie-app">
      <div className="row flex-nowrap">
        <MovieList movies={movies}/>
      </div>
    </div>
  );
};

export default App;
