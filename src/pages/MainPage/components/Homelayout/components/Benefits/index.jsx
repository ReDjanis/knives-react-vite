import React from 'react';
import styled from './index.module.scss';
import { useOutletContext } from "react-router-dom";

function Benefits() {
    const [handleClickOpenModal] = useOutletContext();


    return (
        <section className={styled.benefits}>
            <div className={styled.benefits__content}>
                <div className={styled.benefits__top}>
                    <h2 className={styled.benefits__title}>
                        Преимущества
                    </h2>
                </div>
                <div className={styled.benefits__items}>
                    <div className={styled.benefits__item}>
                        <div className={`${styled.benefits__text} ${styled.first}`}>
                            Все клинки изготовлены по&nbsp;
                            <span className={styled.benefits__text_bold}>
                                индивидуаль&shy;ному заказу.
                            </span>
                            <br />
                            Здесь вы не найдете уже готовых клинков к
                            продаже, но у вас есть возможность заказать тот, который нужен именно вам.

                        </div>
                        <button className={styled.benefits__link}>
                            <picture>
                                <source srcSet="/src/assets/benefits/9_03_01.avif" type="image/avif" />
                                <source srcSet="/src/assets/benefits/9_03_01.webp" type="image/webp" />
                                <img
                                    className={styled.benefits__img}
                                    data-idobj="9_03"
                                    loading="lazy"
                                    src="/src/assets/benefits/9_03_01.jpg"
                                    alt="Нож с оригинальной рукоятью, на которой вырезаны абстрактные узоры, переходящие в голову кота на навершии."
                                    onClick={handleClickOpenModal}
                                />
                            </picture>
                        </button>
                    </div>
                    <div className={styled.benefits__item}>
                        <button className={styled.benefits__link}>
                            <picture>
                                <source srcSet="/src/assets/benefits/2_12_05.avif" type="image/avif" />
                                <source srcSet="/src/assets/benefits/2_12_05.webp" type="image/webp" />
                                <img
                                    className={styled.benefits__img}
                                    data-idobj="2_12"
                                    loading="lazy"
                                    src="/src/assets/benefits/2_12_05.jpg"
                                    alt="Клинок крупным планом, на котором по всей длине изображены волнистые линии, местами закольцованные."
                                    onClick={handleClickOpenModal}
                                />
                            </picture>
                        </button>
                        <div className={`${styled.benefits__text} ${styled.second}`}>
                            Изготавливаю&nbsp;
                            <span className={styled.benefits__text_bold}>
                                дамасскую сталь.
                            </span>
                            <br />
                            Лезвия из такой стали имеют волнистые узоры и отличаются особой прочностью.
                        </div>
                    </div>
                    <div className={styled.benefits__item}>
                        <div className={`${styled.benefits__text} ${styled.third}`}>
                            При желании могу изготовить нож, используя ваши материалы.<br /><br />
                            При заказе изделия на подарок есть вариант передачи заказа в&nbsp;
                            <span className={styled.benefits__text_bold}>
                                фирменной упаковке.
                            </span>
                        </div>
                        <button className={styled.benefits__link}>
                            <picture>
                                <source srcSet="/src/assets/benefits/7_08_08.avif" type="image/avif" />
                                <source srcSet="/src/assets/benefits/7_08_08.webp" type="image/webp" />
                                <img
                                    className={styled.benefits__img}
                                    data-idobj="7_08"
                                    loading="lazy"
                                    src="/src/assets/benefits/7_08_08.jpg"
                                    alt="Подарочная упаковка."
                                    onClick={handleClickOpenModal}
                                />
                            </picture>
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Benefits;