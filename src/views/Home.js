import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import News from '../components/News'
import FeaturedGames from '../components/FeaturedGames'
import Footer from '../components/Footer'

export default function Home() {

    return(
        <main className="home">
            <Header />
            <Carousel />
            <News />
            <FeaturedGames />
            <Footer />
        </main>
    )
}