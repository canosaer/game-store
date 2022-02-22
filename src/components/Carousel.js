import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Carousel() {
    const [pause, setPause ] = useState(false);
    const [ready, setReady ] = useState(true);
    const [activeSlide, setActiveSlide ] = useState(0);

    const slides = [useRef(),useRef(),useRef()];

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

    const advanceSlide = (evt) => {
        if(ready){
            setReady(false)
            if(evt) setPause(true)

            if(activeSlide===2){
                gsap.to(slides[activeSlide].current,{
                    x:'-100%',
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                slides[0].current.classList.toggle('hidden')
                gsap.from(slides[0].current,{
                    x:"100%",
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                gsap.to(slides[0].current,{
                    height: "25rem",
                    duration: 0.01,
                })
                setTimeout(() => {  
                    slides[activeSlide].current.classList.toggle('hidden')
                    setActiveSlide(0)
                    resetSlides()
                }, 1600)
            }
            else{
                gsap.to(slides[activeSlide].current,{
                    x:'-100%',
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                slides[activeSlide+1].current.classList.toggle('hidden')
                gsap.from(slides[activeSlide+1].current,{
                    x:"100%",
                    duration: 1.6,
                    ease: "sine.inOut"
                })
                gsap.to(slides[activeSlide+1].current,{
                    
                    duration: 0.01,
                })
                setTimeout(() => {  
                    slides[activeSlide].current.classList.toggle('hidden')
                    setActiveSlide(activeSlide+1)
                    resetSlides()
                }, 1600)
            }

        }
        
    }

    const resetSlides = () =>{
        for(let i=0;i<3;i++){
            gsap.to(slides[i].current,{
                x:'0',
                duration: 0.01,
            })
        }
        setReady(true)
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
            <div className="carousel__slide carousel__slide_1" ref={slides[0]}>
                <div className="hero__image-slot">
                    <figure className="carousel__image carousel__image_jabba">
                        <div className="carousel__text-shape carousel__text-shape_jabba">
                            <div className="carousel__text-container">
                                <h2 className="carousel__heading">Star Wars: Jabba's Palace - A Love Letter Game</h2>
                                <p className="carousel__text">A quick card game of rebel bravery and vile deceit.</p>
                            </div>
                        </div>
                        <div className="carousel__gradient carousel__gradient_jabba"></div>
                    </figure>
                </div>
            </div>
            <div className="carousel__slide carousel__slide_2 hidden" ref={slides[1]}>
                <div className="hero__image-slot">
                    <figure className="carousel__image carousel__image_citadels">
                        <div className="carousel__text-shape carousel__text-shape_citadels">
                            <div className="carousel__text-container">
                                <h2 className="carousel__heading">Citadels</h2>
                                <p className="carousel__text">Build a medieval city fit for a king in this definitive edition of the acclaimed card game.</p>
                            </div>
                        </div>
                        <div className="carousel__gradient carousel__gradient_citadels"></div>
                    </figure>
                </div>
            </div>
            <div className="carousel__slide carousel__slide_3 hidden" ref={slides[2]}>
                <div className="hero__image-slot">
                    <figure className="carousel__image carousel__image_cryo">
                        <div className="carousel__text-shape carousel__text-shape_cryo">
                            <div className="carousel__text-container">
                                <h2 className="carousel__heading">Cryo</h2>
                                <p className="carousel__text">With your colony ship wrecked on a remote frozen planet, it's up to you to scavenge, build, explore, and lead your faction to victory before the sun sets.</p>
                            </div>
                        </div>
                        <div className="carousel__gradient carousel__gradient_cryo"></div>
                    </figure>
                </div>
            </div>
            <div className="slide-controls">
                <button className="slide-controls__return" onClick={() => returnSlide()}><FontAwesomeIcon icon="chevron-left" /></button>
                <button className="slide-controls__pause" onClick={() => pauseShow()}><FontAwesomeIcon icon="pause" /></button>
                <button className="slide-controls__advance" onClick={() => advanceSlide()}><FontAwesomeIcon icon="chevron-right" /></button>
			</div>
        </section>
    )
}


// import {useEffect, useLayoutEffect, useRef, useState} from 'react';
// import arrow from '../assets/arrow.svg';
// import { useWindowSize } from '../hooks/useWindowSize';

// export default function Carousel({ slides }) {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(true);
//   const [slideBounds, setSlideBounds] = useState();
//   const windowSize = useWindowSize();

//   const slidesEl = useRef(null);
//   const slideEls = useRef(null);
        
//     // Go to slide index.
//   const goToSlide = (index) => {
//     setIsScrolling(false);
//     setSlideIndex(index);
//   };
  
//   // Go to previous  slide.
//   const goToPreviousSlide = (index) => {
//     const prevIndex = index - 1 >= 0 ? index - 1 : slides.length - 1;
//     goToSlide(prevIndex);
//   };

//   // Go to next slide.
//   const goToNextSlide = (index) => {
//     const nextIndex = index + 1 <= slides.length - 1 ? index + 1 : 0;
//     goToSlide(nextIndex);
//   };

//   // Update index when the slidesEl is scrolled.
//   const onScroll = () => {
//     if (slidesEl.current && slideBounds && isScrolling) {
//       const newIndex = Math.round(
//         slidesEl.current.scrollLeft / slideBounds.width
//       );
//       setSlideIndex(newIndex);
//     }
//   };

//   // When the index changes, scroll the div to the appropriate index.
//   useEffect(() => {
//     if (slideBounds && slidesEl.current) {
//       slidesEl.current.scrollTo({
//         top: 0,
//         left: slideBounds.width * slideIndex,
//         behavior: 'smooth',
//       });
//       return;
//     }
//   }, [slideBounds, slidesEl, slideIndex]);

//   // If window is resized, reset slideBounds.
//   useLayoutEffect(() => {
//     if (windowSize) {
//       setSlideBounds(slideEls.current?.getBoundingClientRect());
//       return;
//     }
//   }, [slideEls, windowSize]);

//   // Set slideBounds on mount.
//   useLayoutEffect(() => {
//     setSlideBounds(slideEls.current?.getBoundingClientRect());
//     return;
//   }, []);

//   return (
//     <div className="carousel__container">
//       <div className="carousel">
//         {slides.length > 1 && (
//           <div className="carousel__controls">
//             <div className="carousel__controls__arrows">
//               <div
//               aria-label="Go back"
//               className="carousel__controls__arrows__arrow carousel__controls__arrows__arrow--left"
//               tabIndex="0"
//               onClick={() => goToPreviousSlide(slideIndex)}>
//                   <img src={arrow} alt="Previous Arrow" />
//               </div>
//               <div
//               aria-label="Go forward"
//               className="carousel__controls__arrows__arrow carousel__controls__arrows__arrow--right"
//               tabIndex="0"
//               onClick={() => goToNextSlide(slideIndex)}>
//                   <img src={arrow} alt="Next Arrow" />
//               </div>
//             </div>
//             <div className="carousel__controls__dots">
//               {slides.map((slide, i) => {
//                 const key = `carouselDot-${i}`;
//                 const ariaLabel = `slide--${i+1}--${slide.title}`;
//                 const dotClass = i === slideIndex ?
//                   'carousel__controls__dots__dot carousel__controls__dots__dot--active' :
//                   'carousel__controls__dots__dot';

//                 return (
//                   <div
//                     onClick={() => goToSlide(i)}
//                     aria-label={ariaLabel}
//                     key={key}
//                     className={dotClass}
//                     tabIndex="0">
//                   </div>  
//                 )
//               })}
//             </div>
//           </div>
//         )}
//         <div className="carousel__slides" 
//           ref={slidesEl}
//           onScroll={() => onScroll()}
//           onTransitionEnd={() => setIsScrolling(true)}>
//           {slides.map((slide, i) => {
//               const key = `carouselImage-${i}`;

//               return (
//                   <div className="carousel__slides__slide" ref={slideEls} key={key}>
//                       <img src={slide.image} alt={slide.title} />
//                   </div>
//               );   
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }