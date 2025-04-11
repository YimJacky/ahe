import React from 'react';
import '../App.css';
import { useState } from 'react';

const Navigation = ({ CITIES_DATA }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        try {
            setIsMenuOpen(prevState => !prevState);
        } catch (error) {
            console.error('Navigation toggle menu error:', error);
            reportError(error);
        }
    };

    const handleLinkClick = () => {
        try {
            // Only close menu if in mobile view (window width <= 768px)
            if (window.innerWidth <= 768) {
                setIsMenuOpen(false);
            }
        } catch (error) {
            console.error('Navigation link click error:', error);
            reportError(error);
        }
    };

    try {
        return (
            <nav className="nav" data-name="navigation">
                <div className="nav-container container">
                    <div className="nav-logo" data-name="nav-logo">
                        <img 
                            src="./logo2.png" 
                            alt="CityTour Logo"
                            className="nav-logo-image"
                        />
                        Cities+ Tours
                    </div>
                    <button 
                        className="menu-button" 
                        onClick={toggleMenu}
                        data-name="menu-button"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} data-name="nav-links">
                        {Object.values(CITIES_DATA).map(city => (
                            <a 
                                key={city.name}
                                href={`#${city.name.toLowerCase()}`}
                                className="nav-link"
                                data-name={`nav-link-${city.name.toLowerCase()}`}
                                onClick={handleLinkClick}
                            >
                                {city.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navigation render error:', error);
        reportError(error);
        return null;
    }
};

export default Navigation;