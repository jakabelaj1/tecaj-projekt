// src/App.jsx
import React, { useState } from 'react';
import NavigationBar from './navbar/Navigation';
import Search from "./search/Search.jsx";
import Library from "./library/Library.jsx";

const App = () => {
    const [activeComponent, setActiveComponent] = useState('Library');

    const handleNavigation = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="body">
            <NavigationBar activeComponent={activeComponent} onNavigate={handleNavigation} />
            {activeComponent === 'Library' && <Library />}
            {activeComponent === 'Search' && <Search />}

        </div>
    );
};

export default App;