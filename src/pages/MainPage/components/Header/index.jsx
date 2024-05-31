import React from 'react';
import styled from './index.module.scss';
import { Link } from 'react-router-dom';
import logoURL from 'assets/header/logо.svg';
import IconSearchWhite from 'assets/header/search-white-icon.svg?react';
import MainMenu from 'components/MainMenu';
import Contacts from 'components/Contacts';
import Burger from 'components/Burger';

function Header() {

    return (
        <header className={styled.header}>
            <div className={styled.header__content}>

                <Link className={styled.header__link} to="/">
                    <img className={styled.header__logo} src={logoURL} alt="На главную страницу" />
                </Link>

                <MainMenu />

                <div className={styled.header__right}>
                    <div className={styled.header__search}>
                        <input
                            className={`${styled.header__input} ${styled.search}`}
                            type="text"
                            placeholder="Поиск по каталогу"
                        // onInput={performSearch}
                        />

                        <Link className={styled.header__btn} to="/search">
                            <IconSearchWhite />
                        </Link>

                    </div>

                    <Contacts />

                </div>

                <Burger />
            </div>

        </header>
    );
}

export default Header;