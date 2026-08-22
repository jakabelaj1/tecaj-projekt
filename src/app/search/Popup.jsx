import React from 'react';

const Popup = ({ onClose, item }) => {
    if (!item) return null;


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


    const addToLibrary = async () => {
        try {
            const newLibraryItem = {
                id: Date.now(), // Simple ID generation
                title: title,
                releaseDate: releaseDate,
                posterPath: posterPath,
                watched: false,
                // Add any other properties needed
            };

            const response = await fetch('http://localhost:3000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLibraryItem),
            });

            if (response.ok) {
                onClose();
            }
        } catch (error) {
            console.error('Error adding to library:', error);
            alert('Error adding to library');
        }
    };


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
                        <button className="add-to-library-button" onClick={addToLibrary}>
                            Add to Library
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;