import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Context} from '../store/store'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
    const [state, dispatch] = useContext(Context)
    const [menuOpen, setMenuOpen ] = useState(false);

    const sidebarStyles = menuOpen ? 'sidebar sidebar--open' : 'sidebar'
    const overlayStyles = menuOpen ? 'overlay overlay--open' : 'overlay'

    const navigate = useNavigate();


    const menuToggle = () => {
        setMenuOpen(!menuOpen)
        const pauseState = state.pause
        dispatch ({type: 'TOGGLE_PAUSE', payload: !pauseState})
    }

    return(
        <header className="header">
            <button className="toggle" onClick={menuToggle}><FontAwesomeIcon className="toggle__bars" icon="bars" /></button>
            <div className="logo__container">
            <button className="logo" onClick={() => navigate('/')}><img className="logo__image" src="https://www.zmangames.com/static/images/zman_white_logo.8bc6e70a08d3.svg" alt="logo"/></button>
            </div>
            <button className="cart" onClick={() => navigate('/cart')}><FontAwesomeIcon className="cart__image" icon="shopping-cart" />
                {state.cart.length > 0 ? <figure className="cart__num">{state.cart.length}</figure> : null}
            </button>

            <aside className={sidebarStyles}>
                <ul className="sidebar__list">
                    <li className="sidebar__item"><Link to="/" className="sidebar__link">Home</Link></li>
                    <li className="sidebar__item"><Link to="/shop" className="sidebar__link">Shop</Link></li>
                    <li className="sidebar__item"><Link to="/cart" className="sidebar__link">Cart</Link></li>
                </ul>
            </aside>

            <div className={overlayStyles} onClick={() => setMenuOpen(!menuOpen)}></div>
        </header>
    )
}