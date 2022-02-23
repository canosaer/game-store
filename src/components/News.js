import React from 'react';
import { Link } from 'react-router-dom'
import news from '../store/news'


export default function News() {

    return(
        <section className="news">
            <h2 className="news__heading">{news.heading}</h2>
            {news.stories.map((story, i) => {
                const key = `article-${story.id}`

                return(
                    <Link to="/" key={key} className="news__item">
                        <img className="news__image" loading="lazy" src={story.image} alt={story.headline} />
                        <div className="news__text-container">
                            <h4 className="news__game">{story.game}</h4>
                            <h3 className="news__headline">{story.headline}</h3>
                            <p className="news__excerpt">{story.excerpt}</p>
                        </div>
                    </Link>
                )
            })}
            
        </section>
    )
}