import React from 'react';
import styled from './index.module.scss';
import { forwardRef, useRef, useState } from 'react';


const Detail = forwardRef(function Detail(props, ref) {
    console.log('RENDER DETAIL');
    const { item, map } = props;
    const detailsRef = useRef(null);
    const summaryRef = useRef(null);
    const textRef = useRef(null);
    console.log(map, 'kok');
    const [objDetail, setObjDetail] = useState(
        {
            elem: detailsRef.current,
            summary: summaryRef.current,
            content: textRef.current,
            animation: null,
            isClosing: false,
            isExpanding: false,
        }
    );



    const handleDetails = () => {

        map.current.forEach((val, key) => {

            if (!(item.id === key)) {
                if (val.children[0].getAttribute('open') !== null) {
                    val.children[0].removeAttribute('open');
                }
            }
        })
    }

    const handleSummary = () => {
        console.log(objDetail, 'objDetail');

        map.current.forEach((val, key) => {

            if (item.id === key) {
                val.style.overflow = 'hidden';
            }

        })



    }

    return (
        <div className={styled.questions__item} ref={ref}>
            <details
                className={styled.questions__details}
                // onClick={() => handleDetails()}
                onClick={handleDetails}
                ref={detailsRef}
            >
                <summary className={styled.questions__summary} ref={summaryRef} onClick={handleSummary}>
                    {item.question}
                    <span className={`${styled.questions__line} ${styled.questions__line_position1}`}></span>
                    <span className={`${styled.questions__line} ${styled.questions__line_position2}`}></span>
                </summary>
                <p ref={textRef}>
                    {item.answer}
                </p>
            </details>
        </div>
    );
}

)

export default Detail;
