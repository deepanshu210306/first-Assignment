import React from 'react';
import './footer.css';
import logocom from './logo.svg';
import I from './Search.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">
            <div className="logo-placeholder"><img src={logocom} alt="Maitri Global Education Logo" /></div>
          </div>
          <p className="office-info">
            <strong>HQ Office:</strong><br />
            Via di Villamagna 98<br />
            Florence, Italy 50126
          </p>
          <p className="office-hours">
            Weekdays: 9:00am to 5:00pm
          </p>
          <p className="phone-info">
            <span className="phone-icon"><img src={I} alt="Phone Icon" /></span><br />
            <strong>Phone:</strong><br />
            +393318476757<br />
            +3932949887245
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Undergraduate Courses</a></li>
            <li><a href="#">Master/PhD. Courses</a></li>
            <li><a href="#">Short Courses</a></li>
            <li><a href="#">Scholarships</a></li>
            <li><a href="#">Events and talk</a></li>
            <li><a href="#">About Maitri</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Countries</h3>
          <ul>
            <li><a href="#">Italy</a></li>
            <li><a href="#">France</a></li>
            <li><a href="#">Germany</a></li>
            <li><a href="#">Ireland</a></li>
            <li><a href="#">Spain</a></li>
            <li><a href="#">USA</a></li>
            <li><a href="#">Canada</a></li>
            <li><a href="#">Ukraine</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Career Areas</h3>
          <ul>
            <li><a href="#">Art, Fashion & Design</a></li>
            <li><a href="#">Business & Management</a></li>
            <li><a href="#">Film, Animation, Media & Acting</a></li>
            <li><a href="#">Hospitality & Culinary</a></li>
            <li><a href="#">Arts</a></li>
            <li><a href="#">Engineering, Humanities & Social Sciences</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Subscribe to newsletter</h3>
          <p>Receive updates on latest scholarships, events, career tips and study abroad experience</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter Email Address" />
            <button className="send-button"><img src={I} alt="Send Icon" /></button>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon"><img src={I} alt="Facebook Icon" /></a>
            <a href="#" className="social-icon"><img src={I} alt="Instagram Icon" /></a>
            <a href="#" className="social-icon"><img src={I} alt="YouTube Icon" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2021 Maitri Global Education. All rights reserved. P.IVA 06726250480</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | 
          <a href="#"> DMCA Policy</a> | 
          <a href="#"> Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;