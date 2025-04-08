import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(!localStorage.getItem('cookieConsent'));

  const handleAccept = () => {
    try {
      localStorage.setItem('cookieConsent', 'true');
      setIsVisible(false);
    } catch (error) {
      console.error('Cookie consent error:', error);
      reportError(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('cookieConsent')) {
      setIsVisible(false);
    }
  }, []);

  try {
    if (!isVisible) return null;

    return (
      <div className="cookie-consent" data-name="cookie-consent">
        <div className="cookie-content">
          <p>We use cookies to enhance your browsing experience.</p>
          <button 
            onClick={handleAccept}
            className="cookie-button"
            data-name="cookie-accept"
          >
            Got it
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Cookie consent render error:', error);
    reportError(error);
    return null;
  }
};

export default CookieConsent;