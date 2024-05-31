import React, { useRef, useState } from 'react';
import styled from './index.module.scss';
import { Link } from 'react-router-dom';
import IconKnife from 'assets/homelayout/gallery/knife-icon.svg?react';
import IconMini from 'assets/homelayout/gallery/mini-icon.svg?react';
import IconKitchen from 'assets/homelayout/gallery/kitchen-icon.svg?react';
import IconOther from 'assets/homelayout/gallery/other-icon.svg?react';
import IconArrow from 'assets/homelayout/gallery/right-arrow-icon.svg?react';
import ButtonImg from './components/ButtonImg';
import miniKnives from './mini';
import traditionalKnives from './traditional';
import kitchenKnives from './kitchen';
import otherKnives from './other';
import SortButton from './components/SortButton';

function Gallery() {

    console.log('RENDER GALLERY');
    const [activeBtn, setActiveBtn] = useState('traditional');

    const minRef = useRef(null);
    const traditionalRef = useRef(null);
    const kitchenRef = useRef(null);
    const otherRef = useRef(null);

    const buttons = [
        {
            filter: 'mini',
            name: 'ножи-подвески',
            icon: <IconMini />,
            display: 'none',
            backgroundcolor: 'transparent'

        },
        {
            filter: 'traditional',
            name: 'ножи',
            icon: <IconKnife />,
            display: 'none',
            backgroundcolor: 'transparent'
        },
        {
            filter: 'kitchen',
            name: 'кухонные ножи',
            icon: <IconKitchen />,
            display: 'none',
            backgroundcolor: 'transparent'
        },
        {
            filter: 'other',
            name: 'разное',
            icon: <IconOther />,
            display: 'none',
            backgroundcolor: 'transparent'
        },
    ];

    function switchBlockRef(displayBlock, ...rest) {
        displayBlock.current.style.display = 'grid';
        for (let value of rest) {
            value.current.style.display = 'none';
        }
    }

    const handleBtnSwitch = (e) => {
        let keyword = e.currentTarget.attributes[3].value;

        if (keyword === 'mini') {
            setActiveBtn(keyword);
            switchBlockRef(minRef, traditionalRef, kitchenRef, otherRef);
        } else if (keyword === 'traditional') {
            setActiveBtn(keyword);
            switchBlockRef(traditionalRef, minRef, kitchenRef, otherRef);
        } else if (keyword === 'kitchen') {
            setActiveBtn(keyword);
            switchBlockRef(kitchenRef, minRef, traditionalRef, otherRef);
        } else if (keyword === 'other') {
            setActiveBtn(keyword);
            switchBlockRef(otherRef, minRef, traditionalRef, kitchenRef);
        }
    }
    return (
        <section className={styled.gallery}>
            <div className={styled.gallery__content}>
                <div className={styled.gallery__top}>
                    <h2 className={styled.gallery__title}>
                        Галерея
                    </h2>

                </div>
                <div className={styled.gallery__inner}>
                    <div className={styled.gallery__buttons}>
                        {buttons.map((item, index) => {
                            if (activeBtn === item.filter) {
                                item.display = 'block';
                                item.backgroundcolor = 'rgba(80, 115, 95, 0.5)';
                            }
                            return (
                                <SortButton
                                    key={index}
                                    name={item.name}
                                    icon={item.icon}
                                    filter={item.filter}
                                    display={item.display}
                                    handleBtnGallery={(e) => { handleBtnSwitch(e) }}
                                    backgroundcolor={item.backgroundcolor}
                                />
                            )
                        })}

                    </div>

                    <div
                        className={`${styled.gallery__items} ${styled.mini}`}
                        ref={minRef}
                    >
                        {miniKnives.map((item, index) => {
                            return (
                                <ButtonImg
                                    key={index}
                                    src1={item.src1}
                                    src2={item.src2}
                                    src3={item.src3}
                                    alt={item.alt}
                                />
                            );
                        })}

                    </div>
                    <div
                        className={`${styled.gallery__items} ${styled.traditional}`}
                        ref={traditionalRef}
                    >

                        {traditionalKnives.map((item, index) => {
                            return (
                                <ButtonImg
                                    key={index}
                                    src1={item.src1}
                                    src2={item.src2}
                                    src3={item.src3}
                                    alt={item.alt}
                                />
                            )
                        })}

                    </div>
                    <div
                        className={`${styled.gallery__items} ${styled.kitchen}`}
                        ref={kitchenRef}
                    >

                        {kitchenKnives.map((item, index) => {
                            return (
                                <ButtonImg
                                    key={index}
                                    src1={item.src1}
                                    src2={item.src2}
                                    src3={item.src3}
                                    alt={item.alt}
                                />
                            )
                        })}

                    </div>
                    <div
                        className={`${styled.gallery__items} ${styled.other}`}
                        ref={otherRef}
                    >

                        {otherKnives.map((item, index) => {
                            return (
                                <ButtonImg
                                    key={index}
                                    src1={item.src1}
                                    src2={item.src2}
                                    src3={item.src3}
                                    alt={item.alt}
                                    dimensions={item.dimensions}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className={styled.gallery__pass}>
                    <Link className={styled.gallery__link} to="/catalog">
                        <p className={styled.gallery__top_text}>
                            в каталог
                        </p>

                        <IconArrow />

                    </Link>
                </div>

            </div>



        </section>

    );
}

export default Gallery;