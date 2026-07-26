// src/app/add.jsx
import React, { useState } from 'react';
import App from "../App.jsx";


const Add = ({onClose}) => {
    const [formData, setFormData] = useState({
        title: '',
        releaseDate: new Date().toISOString(),
        imageUrl: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/data', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };





  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <h2>Add Series/Movie</h2>
        <label htmlFor="title">Name:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="releaseDate">Release Date:</label>
        <input
          type="date"
          id="releaseDate"
          name="releaseDate"
          value={formData.releaseDate.slice(0, 10)}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <br />
        <button  type="submit">Add</button>
      </form>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default Add;