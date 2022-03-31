import React from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites, getMovieInfo} ) => {
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="image-container d-flex justify-content-start m-3 " key={idx}>
                    <img src={movie.Poster} alt={movie.Title} srcSet=""></img>
                    {/* Checks init pic and displays AddToFavourites if false */}
                    {FavouriteComponent !== null ?
                        <>
                            <div onClick={() => getMovieInfo(movie)} className="overlay d-flex align-items=center justify-content-center">
                                <h2>Plot</h2>
                            </div>
                            <div onClick={() => handleFavourites(movie)} className="overlay putToBottom d-flex align-items=center justify-content-center">
                                <FavouriteComponent/>
                            </div>
                        </>
                    : null}
                </div>
            ))}
        </>
    );
}

export default MovieList;