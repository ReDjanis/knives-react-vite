import React from 'react';
import styled from "styled-components";
import 'styles/_global.scss';

const Button = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        max-width: 160px;
        /* width: calc(120px + (160 - 120) * ((100vw - 420px) / (1920 - 420))); */
        width: calcFluidParam(120px, 160, 420px, 1920);
        height: 64px;
        padding: 15px 20px;
        font-size: calc((100vw - 595px)/(1920 - 595)*(15 - 12) + 12px);
        line-height: calc((100vw - 595px)/(1920 - 595)*(17 - 14) + 14px);
        text-transform: uppercase;
        letter-spacing: 1px;
        border-bottom: solid 1px #50735F;
        background-color: ${props => props.backgroundcolor};
        position: relative;

        &:nth-child(odd) {
            max-width: 260px;
            width: calc(200px + (260 - 200) * ((100vw - 420px) / (1920 - 420)));
        }

        &:hover {
            cursor: pointer;
            background-color: rgba(80, 115, 95, 0.5);
            transition: background-color 0.5s linear;

            svg {
                display: block;
            }
        }

        svg {
            display: ${props => props.display};
            width: 32px;
            height: 32px;
        }

        &:first-child {
            svg {
                transform: rotate(-135deg);
            }
        }

        @media screen and (min-width: 1920px) {
                font-size: 15px;
                line-height: 17px;
        }

        @media screen and (max-width: 600px) {
                font-size: 12px;
                line-height: 14px;
        }

        @media screen and (max-width: 920px) {
    
            &:nth-child(1) {
                order: 2;
            }

            &:nth-child(2) {
                order: 1;
            }

            &:nth-child(3) {
                order: 3;
            }

            &:nth-child(4) {
                 order: 4;
            }
        
        }

        @media screen and (max-width: 595px) {
            font-size: 0;
            padding: 0;
            width: calc(40px + (50 - 40) * ((100vw - 250px) / (595 - 250)));
            height: calc(40px + (50 - 40) * ((100vw - 250px) / (595 - 250)));
            border: solid 1px #50735F;
            column-gap: 0;

            &:nth-child(odd) {
                width: calc(40px + (50 - 40) * ((100vw - 250px) / (595 - 250)));

                svg {
                    margin-right: -10px;
                }
            }

            svg {
                display: block;
            }
        
        }

`;

function SortButton({ name, icon, handleBtnGallery, ...props }) {
    return (
        <Button {...props}
            data-filter={props.filter}
            onClick={(e) => handleBtnGallery(e)}
        >

            {icon}

            {name}

        </Button>
    );
}

export default SortButton;