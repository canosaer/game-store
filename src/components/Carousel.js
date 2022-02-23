import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);
  const [slideBounds, setSlideBounds] = useState();
  const windowSize = useWindowSize();

  const slidesEl = useRef(null);
  const slideEls = useRef(null);

  const slides = [
    {   imageClass: 'carousel__image carousel__image_jabba',
        textShapeClass: 'carousel__text-shape carousel__text-shape_jabba',
        heading: "Star Wars: Jabba's Palace - A Love Letter Game",
        text: 'A quick card game of rebel bravery and vile deceit.',
        gradientClass: 'carousel__gradient carousel__gradient_jabba',
    },
    {   imageClass: 'carousel__image carousel__image_citadels',
        textShapeClass: 'carousel__text-shape carousel__text-shape_citadels',
        heading: "Citadels",
        text: 'Build a medieval city fit for a king in this definitive edition of the acclaimed card game.',
        gradientClass: 'carousel__gradient carousel__gradient_citadels',
    },
    {   imageClass: 'carousel__image carousel__image_cryo',
        textShapeClass: 'carousel__text-shape carousel__text-shape_cryo',
        heading: "Cryo",
        text: "With your colony ship wrecked on a remote frozen planet, it's up to you to scavenge, build, explore, and lead your faction to victory before the sun sets.",
        gradientClass: 'carousel__gradient carousel__gradient_cryo',
    },



  ]
        
    // Go to slide index.
  const goToSlide = (index) => {
    setIsScrolling(false);
    setSlideIndex(index);
  };
  
  // Go to previous  slide.
  const goToPreviousSlide = (index) => {
    const prevIndex = index - 1 >= 0 ? index - 1 : slides.length - 1;
    goToSlide(prevIndex);
  };

  // Go to next slide.
  const goToNextSlide = (index) => {
    const nextIndex = index + 1 <= slides.length - 1 ? index + 1 : 0;
    goToSlide(nextIndex);
  };

  // Update index when the slidesEl is scrolled.
  const onScroll = () => {
    if (slidesEl.current && slideBounds && isScrolling) {
      const newIndex = Math.round(
        slidesEl.current.scrollLeft / slideBounds.width
      );
      setSlideIndex(newIndex);
    }
  };

  const pauseShow = () => {

  }

  // When the index changes, scroll the div to the appropriate index.
  useEffect(() => {
    if (slideBounds && slidesEl.current) {
      slidesEl.current.scrollTo({
        top: 0,
        left: slideBounds.width * slideIndex,
        behavior: 'smooth',
      });
      return;
    }
  }, [slideBounds, slidesEl, slideIndex]);

  // If window is resized, reset slideBounds.
  useLayoutEffect(() => {
    if (windowSize) {
      setSlideBounds(slideEls.current?.getBoundingClientRect());
      return;
    }
  }, [slideEls, windowSize]);

  // Set slideBounds on mount.
  useLayoutEffect(() => {
    setSlideBounds(slideEls.current?.getBoundingClientRect());
    return;
  }, []);

  return (
    <section className="carousel">
        {slides.map((slide, i) => {
            const key = `slide-${i}`;
            const displayClass = slideIndex == i ? 'carousel__slide displayed' : 'carousel__slide hidden'

            return (
                <div className={displayClass} ref={slideEls} key={key}>
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