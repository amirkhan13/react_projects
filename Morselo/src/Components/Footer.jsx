import React from 'react';
import '../footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Morselo</h4>
          <p>Your ultimate recipe & drink finder</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/drinks">Drinks</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png"/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Morselo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
