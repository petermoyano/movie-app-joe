import React, { useState } from 'react';

const MovieList = ( {movies, FavouriteComponent, handleFavourites} ) => {
    const [plot, setPlot] = useState("");
    const [showPlot, setShowPlot] = useState(false);
    const [plotIdx, setPlotIdx] = useState(); 

    const getMovieInfo = async (movie, idx) => {
        const url = `http://www.omdbapi.com/?t=${movie.Title}&apikey=ca4d40cb`;
        const response = await fetch(url);
        const json = await response.json();
        setPlot(json.Plot);
        setShowPlot(true);
        setPlotIdx(idx);
    };
    
    return ( 
        <>
            {movies.map((movie, idx) => (
                <div className="image-container d-flex justify-content-start m-3 " key={idx}>
                    {/* Shows movie plot when clicked */}
                    <div className="popup">
                        <span className={showPlot && idx === plotIdx ? "show popuptext" : null} id="myPopup">{idx === plotIdx ? plot : null}</span>
                    </div>
                    <img src={movie.Poster} alt={movie.Title} srcSet=""></img>
                    {/* Checks init pic and displays AddToFavourites if false */}
                    {FavouriteComponent !== null ?
                        <>
                            <div onClick={() => getMovieInfo(movie, idx)} className="overlay d-flex align-items=center justify-content-center">
                                <h2>Plot</h2>
                            </div>
                            <div onClick={() => handleFavourites(movie)} className="overlay putToBottom d-flex align-items=center justify-content-center">
                                <FavouriteComponent/>
                            </div>
                        </>
                    : null}
                </div>
            ))};
        </>
    );
}

export default MovieList;