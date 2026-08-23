
import React from 'react';
import './itemDetails.scss';

const ItemDetails = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="item-details-overlay" onClick={onClose}>
            <div className="item-details-content" onClick={(e) => e.stopPropagation()}>
                {item.backdropPath && (
                    <div className="item-details-backdrop">
                        <img src={item.backdropPath} alt={item.title} />
                    </div>
                )}
                <button className="close-button" onClick={onClose}>×</button>
                <div className="item-details-body">
                    <div className="item-details-poster">
                        <img 
                            src={item.posterPath || '/placeholder-image.jpg'} 
                            alt={item.title} 
                            onError={(e) => {
                                e.target.src = '/placeholder-image.jpg';
                            }}
                        />
                    </div>
                    <div className="item-details-details">
                        <h2>{item.title}</h2>
                        <p><strong>Release Date:</strong> {new Date(item.releaseDate).toLocaleDateString()}</p>
                        <p><strong>Rating:</strong> {item.rating}</p>
                        <p><strong>Watched:</strong> {item.watched ? 'Yes' : 'No'}</p>
                        <h3>Overview</h3>
                        <p>{item.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;