import React from 'react';
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

const Img = styled.img`
        max-width: ${props => {
        if (props.dimensions) {
            return '930px'
        } else {
            return '450px'
        }
    }};
        width: 100%;
        max-height: ${props => {
        if (props.dimensions) {
            return '523px'
        } else {
            return '600px'
        }
    }};
        height: 100%;
`;

function ButtonImg({ ...props}) {
    const [handleClickOpenModal] = useOutletContext();
  
     
    return (
        <button onClick={handleClickOpenModal}>
            <picture>
                <source srcSet={props.src1} type="image/avif" />
                <source srcSet={props.src2} type="image/webp" />
                <Img
                    loading="lazy"
                    src={props.src3}
                    alt={props.alt}
                    {...props}
                />
            </picture>
        </button>
    );
}

export default ButtonImg;