import React from 'react';

const SearchBar = ({ query, onQueryChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="search-form">
            <input 
                type="text" 
                value={query} 
                onChange={(e) => onQueryChange(e.target.value)} 
                placeholder="Search TMBD..."
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;