import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Carousel() {
    const [pause, setPause ] = useState(false);
    const [ready, setReady ] = useState(true);
    const [activeSlide, setActiveSlide ] = useState(1);

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

    const renderSlide = (active) => {
        switch(active){
            case 1:
                return(
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
                )
            case 2:
                return(
                    <div className="carousel__slide carousel__slide_2">
                        <div className="hero__image-slot">
                            <figure className="carousel__image carousel__image_citadels">
                                <div className="carousel__text-shape">
                                    <div className="carousel__text-container">
                                        <h2 className="carousel__heading">Citadels</h2>
                                        <p className="carousel__text">Build a medieval city fit for a king in this definitive edition of the acclaimed card game.</p>
                                    </div>
                                </div>
                                <div className="carousel__gradient carousel__gradient_citadels"></div>
                            </figure>
                        </div>
                    </div>
                )
            case 3:
                return(
                    <div className="carousel__slide carousel__slide_3">
                        <div className="hero__image-slot">
                            <figure className="carousel__image carousel__image_cryo">
                                <div className="carousel__text-shape">
                                    <div className="carousel__text-container">
                                        <h2 className="carousel__heading">Cryo</h2>
                                        <p className="carousel__text">With your colony ship wrecked on a remote frozen planet, it's up to you to scavenge, build, explore, and lead your faction to victory before the sun sets.</p>
                                    </div>
                                </div>
                                <div className="carousel__gradient carousel__gradient_cryo"></div>
                            </figure>
                        </div>
                    </div>
                )
        }
    }

    const advanceSlide = () => {
        let slide = activeSlide
        if(slide < 3) slide++
        else slide = 1
        setActiveSlide(slide)
    }

    const returnSlide = () => {
        let slide = activeSlide
        if(slide > 1) slide--
        else slide = 3
        setActiveSlide(slide)
    }

    const pauseShow = () => {

    }

    return(
        <section className="carousel">
            {renderSlide(activeSlide)}

            <div className="slide-controls">
                <button className="slide-controls__return" onClick={() => returnSlide()}><FontAwesomeIcon icon="chevron-left" /></button>
                <button className="slide-controls__pause" onClick={() => pauseShow()}><FontAwesomeIcon icon="pause" /></button>
                <button className="slide-controls__advance" onClick={() => advanceSlide()}><FontAwesomeIcon icon="chevron-right" /></button>
			</div>
        </section>
    )
}