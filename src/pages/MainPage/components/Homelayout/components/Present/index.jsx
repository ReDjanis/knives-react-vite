import React from 'react';
import styled from './index.module.scss';

function Present() {
    return (
        <section className={styled.present}>
            <div className={styled.present__content}>

                <h1 className={styled.present__title}>
                    Ножевая мастерская
                    <span className={styled.present__title_small}>
                        Александра Трусова
                    </span>
                </h1>

                <div className={styled.present__info}>
                    <p className={styled.present__description}>
                        Изготовление на заказ ножей различного назначения, топоров, топориков и проч. <br />
                        Классические природные материалы.<br />
                        Полностью ручная работа
                    </p>
                    <button className={`${styled.present__btn} ${styled.btn_feedback}`}>
                        Связаться со мной
                    </button>
                </div>

            </div>
        </section>

    );
}

export default Present;