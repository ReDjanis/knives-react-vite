import React from 'react';
import styled from './index.module.scss';
import IconLocation from 'assets/footer/location-icon.svg?react';
import MainMenu from 'components/MainMenu';
import Contacts from 'components/Contacts';

function Footer() {
    return (
        <footer className={styled.footer}>
            <div className={styled.footer__content}>
                <div className={styled.footer__info}>

                    <MainMenu />

                    <div className={styled.footer__communication}>

                        <Contacts />

                        <div className={styled.footer__location}>

                            <IconLocation />

                            <p className={styled.footer__text}>
                                г.Липецк, Липецкая обл., РФ
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styled.footer__rights}>
                    © Ножевая мастерская Александра Трусова, 2023
                </div>
            </div>
        </footer>
    );
}

export default Footer;