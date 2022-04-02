import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {


    return(
        <footer className="footer">
            <Link to="/" className="footer__faq">FAQ</Link>
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Z-Man Games</p>
            <div className="footer__social-display">
                <Link to="/" className="footer__social-button">
                    <button className="footer__social-icon"><FontAwesomeIcon icon={["fab", "facebook"]} /></button>
                </Link>
                <Link to="/" className="footer__social-button">
                    <button className="footer__social-icon"><FontAwesomeIcon icon={["fab", "instagram"]} /></button>
                </Link>
                <Link to="/" className="footer__social-button">
                    <button className="footer__social-icon"><FontAwesomeIcon icon={["fab", "twitter"]} /></button>
                </Link>
            </div>
        </footer>
    )
}