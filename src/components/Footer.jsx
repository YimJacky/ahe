import React from 'react';

class Footer extends React.Component {
  render() {
    try {
      return (
        <footer className="footer" data-name="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-section" data-name="footer-about">
                <h3>About Us</h3>
                <p>Discover the world's most fascinating destinations with our expert travel guides and curated experiences.</p>
              </div>
              <div className="footer-section" data-name="footer-contact">
                <h3>Contact</h3>
                <p>Email: info@citytour.com</p>
                <p>Phone: +852 9188 0899</p>
              </div>
              <div className="footer-section" data-name="footer-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://wa.me/85291880899" target="_blank" className="social-link" data-name="social-whatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" className="social-link" data-name="social-twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#" className="social-link" data-name="social-instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link" data-name="social-facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom" data-name="footer-copyright">
              <p>&copy; 2025 Cities+ Tours. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    } catch (error) {
      console.error('Footer render error:', error);
      reportError(error);
      return null;
    }
  }
}

export default Footer;