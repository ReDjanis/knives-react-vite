import React from 'react';
import styled from './index.module.scss';
import { Link } from 'react-router-dom';
import imgAvifUrl from 'assets/homelayout/welcome/11.avif';
import imgWebpUrl from 'assets/homelayout/welcome/11.webp';
import imgJpgUrl from 'assets/homelayout/welcome/11.jpg';

function Welcome() {

    return (
        <section className={styled.welcome}>
            <div className={styled.welcome__content}>

                <h2 className={styled.welcome__title}>
                    Добро пожаловать!
                </h2>

                <div className={styled.welcome__wrp}>

                    <div className={styled.welcome__image}>
                        <picture>
                            <source srcSet={imgAvifUrl} type="image/avif" />
                            <source srcSet={imgWebpUrl} type="image/webp" />
                            <img
                                className={styled.welcome__img}
                                loading="lazy"
                                src={imgJpgUrl}
                                alt="Кузнец стоит возле горна и держит на плече молот." />
                        </picture>
                    </div>

                    <div className={styled.welcome__text}>
                        <p className={styled.welcome__description}>
                            Меня зовут Александр, я кузнец-оружейник со стажем более 10 лет. Приветствую всех
                            любителей и ценителей клинков
                            на
                            своем сайте!
                        </p>
                        <p className={styled.welcome__description}>
                            Здесь вы можете ознакомиться с каталогом выполненных мной заказов, почитать историю обо
                            мне
                            и моем ремесле и, конечно, вдохновившись представленными работами
                            и духом кузнечного мастерства, вы можете связаться со мной, чтобы обговорить детали
                            вашего
                            заказа.
                            <br />
                            <span className={styled.welcome__description_bold}>
                                Желаю приятного время&shy;препровождения!
                            </span>
                        </p>
                    </div>

                </div>

                <div className={styled.welcome__button}>

                    <Link className={styled.welcome__btn} to="/about">
                        Больше обо мне
                    </Link>

                </div>
            </div>
        </section>
    );
}

export default Welcome;