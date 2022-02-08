import React, { useState } from 'react';
import { gsap } from "gsap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Carousel() {
    const [pause, setPause ] = useState(false);
    const [ready, setReady ] = useState(true);

    // useEffect(
    //     () => {
    //         if(!pause){
    //             const handler = setTimeout(() => {
    //                 advanceSlide();
    //             }, 5500);
    //         }
    //     },
    //     [pause, ready]
    // )

    return(
        <section className="carousel">
            <div className="carousel__slide carousel__slide_1">
                <div className="hero__image-slot">
                    <figure className="carousel__image carousel__image_jabba">
                        <div className="carousel__text-shape">
                            <div className="carousel__text-container">
                                <h2 className="carousel__heading">Star Wars: Jabba's Palace - A Love Letter Game</h2>
                                <p className="carousel__text">A quick card game of rebel bravery and vile deceit.</p>
                            </div>
                        </div>
                        <div className="carousel__gradient carousel__gradient_jabba"></div>
                    </figure>
                </div>
            </div>
            <div className="carousel__slide carousel__slide_2 hidden">
                <div className="hero__image-slot">
                    <figure className="carousel__image carousel__image_citadels">
                        <div className="carousel__text-container">
                            <h2 className="carousel__heading">Citadels</h2>
                            <p className="carousel__text">Build a medieval city fit for a king in this definitive edition of the acclaimed card game.</p>
                        </div>
                        <div className="carousel__gradient carousel__gradient_citadels"></div>
                    </figure>
                </div>
            </div>
            <div className="carousel__slide carousel__slide_3 hidden">
                <div className="hero__image-slot">
                    <figure className="carousel__image carousel__image_cryo">
                        <div className="carousel__text-container">
                            <h2 className="carousel__heading">Cryo</h2>
                            <p className="carousel__text">With your colony ship wrecked on a remote frozen planet, it's up to you to scavenge, build, explore, and lead your faction to victory before the sun sets.</p>
                        </div>
                        <div className="carousel__gradient carousel__gradient_citadels"></div>
                    </figure>
                </div>
            </div>

            
        </section>
    )
}