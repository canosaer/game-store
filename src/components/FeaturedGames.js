import React from 'react';
import { Link } from 'react-router-dom'
import featured from '../store/featured'


export default function News() {

    return(
        <section className="featured-games">
            <h2 className="featured-games__heading">{featured.heading}</h2>
            {featured.games.map((game, i) => {
                const key = `game-${game.id}`

                return(
                    <div key={key} className="featured-games__game-display">
                        <Link className="featured-games__image-slot" to="/">
                            <img loading="lazy" className="featured-games__image" src={game.image} alt={game.heading} />
                        </Link>
                        <div className={game.gradientClass}></div>
                        <div className="featured-games__text-container">
                            <h2 className="featured-games__heading">{game.heading}</h2>
                            <p className="featured-games__text">{game.text}</p>
                        </div>
                    </div>
                )
            })}
            
        </section>
    )
}