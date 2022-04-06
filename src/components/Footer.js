import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {


    return(
        <footer className="footer">
            <a className="footer__link" href="#">FAQ</a>
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Z-Man Games</p>
            <div className="footer__social-display">
                <a href="#" className="footer__social-button">
                    <button className="footer__social-icon"><FontAwesomeIcon icon={["fab", "facebook"]} /></button>
                </a>
                <a href="#" className="footer__social-button">
                    <button className="footer__social-icon"><FontAwesomeIcon icon={["fab", "instagram"]} /></button>
                </a>
                <a href="#" className="footer__social-button">
                    <button className="footer__social-icon footer__social-icon_twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></button>
                </a>
            </div>
        </footer>
    )
}