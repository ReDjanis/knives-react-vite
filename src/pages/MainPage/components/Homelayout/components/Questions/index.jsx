import React, { useEffect, useState } from 'react';
import { useRef } from "react";
import styled from './index.module.scss';
import topic from './Detail/topic.js';
import Detail from './Detail/index.jsx';
import Smoothing from './Detail/Accordion';

function Questions() {
    console.log('RENDER QUESTIONS');
    const detailRef = useRef(null);
    const [arrDetails, setArrDetails] = useState(null);
    // const toggleDetails = (itemId) => {
    //     console.log(detailRef, 'detailRef');
    //     console.log(itemId, 'itemId');
    //     detailRef.current.forEach((val, key) => {

    //         if (!(itemId === key)) {

    //             if (val.getAttribute('open') !== null) {
    //                 val.removeAttribute('open');
    //             }
    //         }
    //     })
    // };

    useEffect(() => {
        console.log('rerender', detailRef.current);
        setArrDetails(detailRef.current);
    }, [detailRef])

    function getMap() {

        if (!detailRef.current) {
            detailRef.current = new Map();
        }
        return detailRef.current;
    }

    return (
        <section className={styled.questions}>
            <div className={styled.questions__content}>

                <div className={styled.questions__top}>
                    <h2 className={styled.questions__title}>
                        Часто задаваемые вопросы
                    </h2>
                </div>

                <div className={styled.questions__items}>

                    {topic.map((item) => {
                        return (
                            <Detail
                                key={item.id}
                                item={item}
                                // handleDetails={() => toggleDetails(item.id)}
                                map={detailRef}
                                ref={(node) => {
                                    const map = getMap();
                                    if (node) {
                                        map.set(item.id, node);
                                    } else {
                                        map.delete(item.id);
                                    }
                                }}

                            />
                        )
                    })}

                </div>

            </div >
        </section >
    );
}

export default Questions;