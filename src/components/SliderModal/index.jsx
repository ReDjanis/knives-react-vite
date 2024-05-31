import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";
import SliderModalItem from './SliderModalItem';
import './index.scss';


function SliderModal({ arrSrc, numImg }) {
    console.log('RENDER MODAL SLIDER');

    let sliderRef = useRef(null);
    
    useEffect(() => {
        sliderRef.slickGoTo(numImg);
    }, [sliderRef, numImg])

    let settings = {
        className: 'modal__slider',
        dots: true,
        speed: 500,
        cssEase: 'linear',
        initialSlide: +numImg, 
        adaptiveHeight: true,
        adaptiveWidth: true,
    };

    return (

        <Slider
            ref={slider => {
                sliderRef = slider;
            }}
            {...settings}
        >

            {arrSrc.map((i, index) => {
                return (
                    <SliderModalItem
                        key={index}
                        index={index}
                        srcAvif={i}
                        srcWebp={i.replace('avif', 'webp')}
                        srcJpg={i.replace('avif', 'jpg')}
                    />
                )
            })}

        </Slider>

    );
}

export default SliderModal;