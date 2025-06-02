import React from 'react';
import '../styles/Footer.scss';
import logo from '../assets/Kasa-White.svg';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Kasa Logo" className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;