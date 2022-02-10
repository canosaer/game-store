import React, {useContext} from 'react';
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import {Context} from '../store/store'

export default function Home() {
   const [state, dispatch] = useContext(Context)
   console.table(state)
    return(
        <main className="home">
            <Header />
            <Carousel />
        </main>
    )
}