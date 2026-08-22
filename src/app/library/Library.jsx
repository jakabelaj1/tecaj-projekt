//library page
import React, {useEffect, useState} from 'react';
import "./library.scss";
import Add from "../add-content/Add.jsx";

const Library = () => {
    const [data, setData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [sortBy, setSortBy] = useState('title'); // Default sorting: title

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    // Load data from JSON Server when component mounts
    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch('http://localhost:3000/data');
                const jsonData = await response.json();
                setData(jsonData || []);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };
        
        loadData();
    }, []);

    // Function to remove an item from the library
    const removeItem = async (id) => {
        try {
            // Delete from JSON Server
            const response = await fetch(`http://localhost:3000/data/${id}`, {
                method: 'DELETE',
            });
            
            if (response.ok) {
                // Remove from local state
                setData(prevData => prevData.filter(item => item.id !== id));
            }
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    // Function to toggle watched status
    const toggleWatchedStatus = async (id, currentStatus) => {
        try {
            const newStatus = !currentStatus;
            
            // Update in JSON Server
            const response = await fetch(`http://localhost:3000/data/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ watched: newStatus }),
            });
        
            if (response.ok) {
                // Update local state
                setData(prevData => 
                    prevData.map(item => 
                        item.id === id ? { ...item, watched: newStatus } : item
                    )
                );
            }
        } catch (error) {
            console.error('Error updating watched status:', error);
        }
    };

    // Function to sort items
    const sortItems = (items, sortBy) => {
        const sortedItems = [...items];
        
        switch (sortBy) {
            case 'title':
                return sortedItems.sort((a, b) => a.title.localeCompare(b.title));
            case 'releaseDateNewest':
                return sortedItems.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
            case 'releaseDateOldest':
                return sortedItems.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
            default:
                return sortedItems;
        }
    };

    // Get sorted data
    const sortedData = sortItems(data, sortBy);

    return (
        <div className="Library">
            <h1>Library</h1>
            
            <div className="library-container">
                <div className="add-form-container">
                    <button className="add-button" onClick={openPopup}>Add Series/Movie</button>
                    <button 
                        className="sort-button" 
                        onClick={() => {
                            if (sortBy === 'title') setSortBy('releaseDateNewest');
                            else if (sortBy === 'releaseDateNewest') setSortBy('releaseDateOldest');
                            else setSortBy('title');
                        }}
                    >
                        Sort: {sortBy === 'title' ? 'Title' : sortBy === 'releaseDateNewest' ? 'Newest' : 'Oldest'}
                    </button>
                    {isPopupOpen && <Add onClose={closePopup} />}
                </div>
                
                <div className="library-items">
                    {sortedData.length === 0 ? (
                        <p className="no-items-message">No items in your library yet.</p>
                    ) : (
                        sortedData.map((item) => (
                            <div key={item.id} className="library-item" style={{ backgroundImage: `url(${item.posterPath})` }}>
                                <div className="item-content">
                                    <h3>{item.title}</h3>
                                    <p className="item-release-date">Release Date: {new Date(item.releaseDate).toLocaleDateString()}</p>
                                </div>
                                <button 
                                    className="watched-toggle-button" 
                                    onClick={() => toggleWatchedStatus(item.id, item.watched)}
                                >
                                    {item.watched ? 'Mark Unwatched' : 'Mark Watched'}
                                </button>
                                <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Library;