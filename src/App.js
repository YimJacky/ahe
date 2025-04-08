import logo from './logo.svg';
import './App.css';
import React from 'react';
import CookieConsent from './components/CookieConsent';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CitySection from './components/CitySection';
import Footer from './components/Footer';
import { CITIES_DATA } from './constants';


class App extends React.Component {
  render() {
  try {
  return (
  <div className="app" data-name="app">
  <Navigation />
  <HeroSection />
  <main id="cities" data-name="main-content">
  {Object.values(CITIES_DATA).map((city, index) => (
  <CitySection key={index} city={city} />
  ))}
  </main>
  <Footer />
  <CookieConsent />
  </div>
  );
  } catch (error) {
  console.error('App render error:', error);
  return null;
  }
  }
  }
  

export default App;
