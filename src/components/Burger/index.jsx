import React, { useRef } from 'react';
import styled from './index.module.scss';
import IconSearchWhite from 'assets/header/search-white-icon.svg?react';
import { Link } from 'react-router-dom';

function Burger() {

    const burgerRef = useRef(null);

    return (
        <div className={styled.burger}>
            <input
                type="checkbox"
                id="check-menu"
                ref={burgerRef}
            />
            <label
                htmlFor="check-menu"
                className={styled.burger__label}
            >
            </label>

            <div className={`${styled.burger__line} ${styled.burger__line_position1}`}></div>
            <div className={`${styled.burger__line} ${styled.burger__line_position2}`}></div>
            <div className={`${styled.burger__line} ${styled.burger__line_position3}`}></div>
            <div className={`${styled.burger__line} ${styled.burger__line_position4}`}></div>

            <nav
                className={styled.burger__nav}
                onClick={() => {
                    burgerRef.current.checked = false;
                }}
            >
                <Link className={styled.burger__item} to="/" data-router="main-link">
                    Главная
                </Link>

                <Link className={styled.burger__item} to="/catalog" data-router="catalog-link">
                    Каталог
                </Link>

                <Link className={styled.burger__item} to="/about" data-router="about-link">
                    Обо мне
                </Link>

                <Link className={styled.burger__item} to="/delivery" data-router="delivery-link">
                    Доставка
                </Link>

                <Link className={styled.burger__item} to="https://t.me/KapitanKapitoshka" target="_blank" rel="noreferrer">
                    Телеграм
                </Link>

                <Link className={styled.burger__item} to="https://vk.com/kovkaknife" target="_blank" rel="noreferrer">
                    Вконтакте
                </Link>

                <Link className={styled.burger__item} to="mailto:DamaskKnife@yandex.ru">
                    DamaskKnife@yandex.ru
                </Link>

                <Link className={styled.burger__item} to="/search" data-name="search-button">

                    <IconSearchWhite />

                    Поиск по каталогу
                </Link>

            </nav>

        </div>
    );
}

export default Burger;