import React, { useState, useEffect } from 'react';
import { CITIES_DATA } from '../constants';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const nextSlide = () => {
    try {
      setCurrentSlide(prevSlide => (prevSlide + 1) % Object.keys(CITIES_DATA).length);
    } catch (error) {
      console.error('HeroSection next slide error:', error);
      reportError(error);
    }
  };

  try {
    const cities = Object.values(CITIES_DATA);
    
    return (
      <section className="hero" data-name="hero-section">
        {cities.map((city, index) => (
          <div 
            key={city.name}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            data-name={`hero-slide-${city.name.toLowerCase()}`}
          >
            <img 
              src={city.images[0]} 
              alt={city.name}
              className="hero-image"
              data-name={`hero-image-${city.name.toLowerCase()}`}
            />
          </div>
        ))}
        <div className="hero-content" data-name="hero-content">
          <h1 className="hero-title" data-name="hero-title">Explore World Heritage</h1>
          <a 
            href="/OTT_A4.pdf"
            className="hero-button" 
            target="_blank"
            rel="noopener noreferrer"
            data-name="hero-cta"
          >
            View Travel Tips
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection render error:', error);
    reportError(error);
    return null;
  }
};

export default HeroSection;