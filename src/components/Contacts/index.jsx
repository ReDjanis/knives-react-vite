import React from 'react';
import styled from './index.module.scss';
import IconTelegram from 'assets/header/telegram-icon.svg?react';
import IconVk from 'assets/header//vk-icon.svg?react';
import IconEmail from 'assets/header//email-icon.svg?react';
import { Link } from 'react-router-dom';

function Contacts() {
    return (
        <div className={styled.contacts}>
            <Link className={`${styled.contacts__social} ${styled.telegram}`} to="https://t.me/KapitanKapitoshka" target="_blank" rel="noreferrer">

                <IconTelegram />

            </Link>
            <Link className={`${styled.contacts__social} ${styled.vk}`} to="https://vk.com/kovkaknife" target="_blank" rel="noreferrer">

                <IconVk />

            </Link>
            <Link className={styled.contacts__email} to="mailto:DamaskKnife@yandex.ru">

                <IconEmail />

                <span className={styled.contacts__text}>
                    DamaskKnife@yandex.ru
                </span>
            </Link>
        </div>
    );
}

export default Contacts;