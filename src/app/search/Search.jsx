import React, { useState } from 'react';
import SearchBar from './Searchbar';
import MovieBanner from './MovieBanner';
import Popup from './Popup';
import './Search.scss';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query.trim()) {
            // Using TMDB API as requested
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=145da1242e5cb9b6cef2380c70acae3d&query=${encodeURIComponent(query)}`);
            const data = await response.json();
            setResults(data.results || []);
        }
    };

    const openPopup = (item) => {
        setSelectedItem(item);
        setShowPopup(true);
    };

    return (
        <div className="search-container">
            <SearchBar query={query} onQueryChange={setQuery} onSubmit={handleSearch} />
            <div className="movie-banners">
                {results.map((result) => (
                    <MovieBanner key={result.id} result={result} onClick={() => openPopup(result)} />
                ))}
            </div>
            {showPopup && (
                <Popup onClose={() => setShowPopup(false)} item={selectedItem} />
            )}
        </div>
    );
};

export default Search;