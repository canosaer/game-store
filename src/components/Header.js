import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from '../store/store'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
    const [state, dispatch] = useContext(Context)
    const [menuOpen, setMenuOpen ] = useState(false);
    const [toggleBars, setToggleBars ] = useState([]);
    const [carouselState, setCarouselState ] = useState(null);

    const sidebarStyles = menuOpen ? 'sidebar sidebar--open' : 'sidebar'
    const overlayStyles = menuOpen ? 'overlay overlay--open' : 'overlay'

    const navigate = useNavigate();

    const handlePauseState = (element) => {
        if(!element.classList[2]){
            setCarouselState(state.pause)
            dispatch ({type: 'TOGGLE_PAUSE', payload: true})
        }
        else dispatch ({type: 'TOGGLE_PAUSE', payload: carouselState})
    }


    const menuToggle = (e) => {
        setMenuOpen(!menuOpen)
        if(!e.target.classList[0].includes('bar')) handlePauseState(e.target.firstChild)
        else handlePauseState (e.target)
    }

    const lockScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }

    const unlockScroll = () => {
        window.onscroll = function() {}
    }

    useEffect(() => {
        let toggleArray = ['','','']
        toggleArray.fill('toggle__bar')

        if(menuOpen){
            window.scrollTo(0,0)
            // lockScroll()
            for(let i=0;i<3; i++){
                toggleArray[i] = toggleArray[i] + ` toggle__bar_${i} toggle__bar_open`
            }
            setToggleBars(toggleArray)
        }
        else{
            // unlockScroll()
            for(let i=0;i<3; i++){
                toggleArray[i] = toggleArray[i] + ` toggle__bar_${i}`
            }
            setToggleBars(toggleArray)
        } 

    }, [menuOpen]);

    return(
        <header className="header">
           <button className="toggle" onClick={(e) => menuToggle(e)}>
                {toggleBars.map((bar, i) => {
                    const key = `bar--${i}`

                    return(
                        <div key={key} className={bar}></div>
                    )
                })}
            </button>
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