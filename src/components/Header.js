import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);

    const sidebarStyles = menuOpen ? 'sidebar sidebar--open' : 'sidebar'
    const overlayStyles = menuOpen ? 'overlay overlay--open' : 'overlay'

    const navigate = useNavigate();

    return(
        <section className="header">
            <button className="toggle" onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon className="toggle__bars" icon="bars" /></button>
            <button className="logo" onClick={() => navigate('/')}><img className="logo__image" src="https://www.zmangames.com/static/images/zman_white_logo.8bc6e70a08d3.svg" alt="logo"/></button>
            <button className="cart" onClick={() => navigate('/cart')}><FontAwesomeIcon className="cart__image" icon="shopping-cart" /></button>

            <aside className={sidebarStyles}>
                <ul className="sidebar__list">
                    <li className="sidebar__item"><a className="sidebar__link" href="">Home</a></li>
                    <li className="sidebar__item"><a className="sidebar__link" href="">Link1</a></li>
                    <li className="sidebar__item"><a className="sidebar__link" href="">Link2</a></li>
                </ul>
            </aside>

            <div className={overlayStyles} onClick={() => setMenuOpen(!menuOpen)}></div>
        </section>
    )
}