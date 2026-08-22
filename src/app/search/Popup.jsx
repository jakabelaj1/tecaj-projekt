import React from 'react';

const Popup = ({ onClose, item }) => {
    if (!item) return null;

    // Handle both movies and TV shows
    const isMovie = item.media_type === 'movie';
    const title = item.title || item.name;
    const releaseDate = item.release_date || item.first_air_date;
    const posterPath = item.poster_path 
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : '/placeholder-image.jpg';
    const backdropPath = item.backdrop_path 
        ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
        : null;
    const overview = item.overview || 'No description available.';
    const rating = item.vote_average ? `${item.vote_average.toFixed(1)}/10` : 'N/A';

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                {backdropPath && (
                    <div className="popup-backdrop">
                        <img src={backdropPath} alt={title} />
                    </div>
                )}
                <button className="close-button" onClick={onClose}>×</button>
                <div className="popup-body">
                    <div className="popup-poster">
                        <img 
                            src={posterPath} 
                            alt={title} 
                            onError={(e) => {
                                e.target.src = '/placeholder-image.jpg';
                            }}
                        />
                    </div>
                    <div className="popup-details">
                        <h2>{title}</h2>
                        {releaseDate && <p><strong>Release Date:</strong> {releaseDate}</p>}
                        <p><strong>Rating:</strong> {rating}</p>
                        <p><strong>Overview:</strong> {overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;