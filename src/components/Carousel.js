import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from "gsap";

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [ready, setReady] = useState(true)
  const [pause, setPause] = useState(false)
  const [outgoingSlide, setOutgoingSlide] = useState(0)
  
  const slides = [
    {   imageClass: 'carousel__image carousel__image_jabba',
        textShapeClass: 'carousel__text-shape carousel__text-shape_jabba',
        heading: "Star Wars: Jabba's Palace - A Love Letter Game",
        text: 'A quick card game of rebel bravery and vile deceit.',
        gradientClass: 'carousel__gradient carousel__gradient_jabba',
        ref: useRef()
    },
    {   imageClass: 'carousel__image carousel__image_citadels',
        textShapeClass: 'carousel__text-shape carousel__text-shape_citadels',
        heading: "Citadels",
        text: 'Build a medieval city fit for a king in this definitive edition of the acclaimed card game.',
        gradientClass: 'carousel__gradient carousel__gradient_citadels',
        ref: useRef()
    },
    {   imageClass: 'carousel__image carousel__image_cryo',
        textShapeClass: 'carousel__text-shape carousel__text-shape_cryo',
        heading: "Cryo",
        text: "With your colony ship wrecked on a remote frozen planet, it's up to you to scavenge, build, explore, and lead your faction to victory before the sun sets.",
        gradientClass: 'carousel__gradient carousel__gradient_cryo',
        ref: useRef()
    },
  ]

      
    // Go to slide index.
  const goToSlide = (index) => {
    setReady(false)
    console.log(outgoingSlide, slideIndex)
    if((slideIndex === 0 && outgoingSlide === slides.length-1) || slideIndex > outgoingSlide) gsap.from(slides[index].ref.current, {x:'100%'})
    else if(slideIndex===slides.length-1 && outgoingSlide === 0 || slideIndex < outgoingSlide) gsap.from(slides[index].ref.current, {x:'-100%'})
    
    
    

  };
  
  // Go to previous  slide.
  const goToPreviousSlide = (index) => {
    setOutgoingSlide(slideIndex)
    const prevIndex = index - 1 >= 0 ? index - 1 : slides.length - 1;
    setSlideIndex(prevIndex)
    goToSlide(slideIndex);
  };

  // Go to next slide.
  const goToNextSlide = (index) => {
    const nextIndex = index + 1 <= slides.length - 1 ? index + 1 : 0;
    goToSlide(nextIndex);
  };

  const pauseShow = () => {

  }

  return (
    <section className="carousel">
        {slides.map((slide, i) => {
            const key = `slide-${i}`;
            let displayClass = ''

            if(slideIndex === i){
              displayClass = 'carousel__slide displayed bring-to-front'
            }
            else if(!ready && i===outgoingSlide){
              displayClass = 'carousel__slide displayed'
            }
            else{
              displayClass = 'carousel__slide hidden'
            }       

            return (
                <div className={displayClass} key={key} ref={slide.ref}>
                    <div className="hero__image-slot">
                        <figure className={slide.imageClass}>
                            <div className={slide.textShapeClass}>
                                <div className="carousel__text-container">
                                    <h2 className="carousel__heading">{slide.heading}</h2>
                                    <p className="carousel__text">{slide.text}</p>
                                </div>
                            </div>
                            <div className={slide.gradientClass}></div>
                        </figure>
                    </div>                      
                </div>
            );   
        })}
        <div className="slide-controls">
            <button className="slide-controls__return" onClick={() => goToPreviousSlide(slideIndex)}><FontAwesomeIcon icon="chevron-left" /></button>
            <button className="slide-controls__pause" onClick={() => pauseShow()}><FontAwesomeIcon icon="pause" /></button>
            <button className="slide-controls__advance" onClick={() => goToNextSlide(slideIndex)}><FontAwesomeIcon icon="chevron-right" /></button>
        </div>
    </section>
  )
}