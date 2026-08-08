//library page
import React, {useEffect, useState} from 'react';
import "./library.scss";
import Add from "../add-content/Add.jsx";

const Library = () => {
    const [data, setData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

    return (
        <div className="Library">
            <h1>Library</h1>
            
            <div>
                <button onClick={openPopup}>Add Series/Movie</button>
                {isPopupOpen && <Add onClose={closePopup} />}
                
                <div className="library-items">
                    {data.length === 0 ? (
                        <p>No items in your library yet.</p>
                    ) : (
                        data.map((item) => (
                            <div key={item.id} className="library-item">
                                <h3>{item.title}</h3>
                                <p>Release Date: {new Date(item.releaseDate).toLocaleDateString()}</p>
                                {item.imageUrl && <img src={item.imageUrl} alt={item.title} onError={(e) => { e.target.style.display = 'none'; }} />}
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Library;