import React from 'react';

const MovieBanner = ({ result, onClick }) => {
    const title = result.title || result.name;
    const releaseDate = result.release_date || result.first_air_date;
    const posterPath = result.poster_path
        ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
        : '/placeholder-image.jpg'; // Fallback image

    return (
        <div className="movie-poster" onClick={onClick}>
            <img
                src={posterPath}
                alt={title}
                onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                }}
            />
            <h3>{title}</h3>
            {releaseDate && <p className="release-date">{releaseDate}</p>}
        </div>
    );
};

export default MovieBanner;