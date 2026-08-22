
import React, { useState } from 'react';
import './add.scss';

const Add = ({ onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        releaseDate: new Date().toISOString().split('T')[0],
        posterPath: '',
        watched: false
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        // Handle checkbox differently from other inputs
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // submit to json-server
            const response = await fetch('http://localhost:3000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    id: Date.now().toString() // Generate unique ID
                })
            });

            if (response.ok) {
                console.log('Data added successfully');
                onClose(); // close the popup

                window.location.reload();
            } else {
                console.error('Failed to add data');
            }
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return (
        <div className="add-form-overlay">
            <div className="add-form-container">
                <h2>Add New Movie/Series</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input
                            type="date"
                            id="releaseDate"
                            name="releaseDate"
                            value={formData.releaseDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="posterPath">poster url:</label>
                        <input
                            type="url"
                            id="posterPath"
                            name="posterPath"
                            value={formData.posterPath}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="watched">Watched:</label>
                        <input
                            type="checkbox"
                            id="watched"
                            name="watched"
                            checked={formData.watched}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="form-actions">
                        <button type="submit">Add</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;