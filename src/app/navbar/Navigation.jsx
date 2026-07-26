//Navigation
import React from 'react';
import "./navbar.scss"


const NavigationBar = ({ activeComponent, onNavigate }) => {
    const handleNavigation = (component) => {
        onNavigate(component);
    };

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li onClick={() => handleNavigation('Library')} className={activeComponent === 'Library' ? 'active' : ''}>Library</li>
                    <li onClick={() => handleNavigation('Search')} className={activeComponent === 'Search' ? 'active' : ''}>Search</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationBar;