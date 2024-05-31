import React from 'react';
import styled from "./index.module.scss";

function SliderModalItem({ index, srcAvif, srcWebp, srcJpg }) {
    console.log('RENDER MODAL SLIDER ITEM');

    return (
        <div className={styled.modal__item}>
            <picture>
                <source srcSet={srcAvif} type="image/avif" />
                <source srcSet={srcWebp} type="image/webp" />
                <img
                    loading={
                        index === 0 ? 'eager' : 'lazy'
                    }
                    src={srcJpg}
                    alt="Нож"
                    decoding="auto"
                />
            </picture>
        </div>
    );

}

export default SliderModalItem;