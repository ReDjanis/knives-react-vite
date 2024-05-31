import React from 'react';
import styled from './index.module.scss';
import { NavLink } from 'react-router-dom';


function MainMenu() {

    const setActive = ({ isActive }) => isActive ? styled.active : styled.pending;

    return (
        <nav className={styled.menu}>
            <ul className={styled.menu__list}>
                <li className={styled.menu__item}>
                    <NavLink className={setActive} to="/">
                        Главная
                    </NavLink>
                </li>
                <li className={styled.menu__item}>
                    <NavLink className={setActive} to="/catalog">
                        Каталог
                    </NavLink>
                </li>
                <li className={styled.menu__item}>
                    <NavLink className={setActive} to="/about">
                        Обо мне
                    </NavLink>
                </li>
                <li className={styled.menu__item}>
                    <NavLink className={setActive} to="/delivery">
                        Доставка
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;