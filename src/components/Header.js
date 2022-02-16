import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'


export default function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);

    const sidebarStyles = menuOpen ? 'sidebar sidebar--open' : 'sidebar'
    const overlayStyles = menuOpen ? 'overlay overlay--open' : 'overlay'

    const navigate = useNavigate();

    return(
        <section className="header">
            <button className="toggle" onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon className="toggle__bars" icon="bars" /></button>
            <div className="logo__container">
            <button className="logo" onClick={() => navigate('/')}><img className="logo__image" src="https://www.zmangames.com/static/images/zman_white_logo.8bc6e70a08d3.svg" alt="logo"/></button>
            </div>
            <button className="cart" onClick={() => navigate('/cart')}><FontAwesomeIcon className="cart__image" icon="shopping-cart" /></button>

            <aside className={sidebarStyles}>
                <ul className="sidebar__list">
                    <li className="sidebar__item"><Link to="/" className="sidebar__link">Home</Link></li>
                    <li className="sidebar__item"><Link to="/shop" className="sidebar__link">Shop</Link></li>
                    <li className="sidebar__item"><Link to="/cart" className="sidebar__link">Cart</Link></li>
                </ul>
            </aside>

            <div className={overlayStyles} onClick={() => setMenuOpen(!menuOpen)}></div>
        </section>
    )
}