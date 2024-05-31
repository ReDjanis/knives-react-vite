import React, { useRef } from 'react';
import styled from './index.module.scss';
import IconClose from 'assets/close-icon.svg?react';
import SliderModal from 'components/SliderModal';

function Modal(props) {
    const { showModal, setShowModal, arrSrc, setArrSrc, title, setTitle, arrTexts, setArrTexts, numImg, setNumImg, idProduct } = props;
    console.log('RENDER MODAL');

    const dialogRef = useRef(null);
    const btnCloseRef = useRef(null);
    const btnSmallCloseRef = useRef(null);

    if (showModal) {
        document.body.classList.add("scroll-lock");
        console.log('вызывает ShowModal');
        dialogRef.current.showModal();


    }

    const hideBtnClose = () => {
        if (window.innerWidth > 995) {
            btnCloseRef.current.style.display = 'none';
        }
    }
    const showBtnClose = () => {
        if (window.innerWidth > 995) {
            btnCloseRef.current.style.display = 'block';
        }
    }



    const closeOnBackDropClickOrBtn = ({ currentTarget, target }) => {
  
        const isClickedOnBackDrop = target === currentTarget;
        let isClickedOnButton;

        isClickedOnButton = (target === btnCloseRef.current) || (target === btnSmallCloseRef.current);

        if (isClickedOnBackDrop || isClickedOnButton) {
            setArrSrc([]);
            setTitle('');
            setArrTexts([]);
            setNumImg('');
            document.body.classList.remove("scroll-lock");
            setShowModal(false);
            dialogRef.current.close();
        }

    }

    return (
       <dialog
            className={styled.modal}
            open={showModal}
            ref={dialogRef}
            onClick={closeOnBackDropClickOrBtn}
        >
            <div
                className={styled.modal__alert}
                ref={btnCloseRef}
            >
                Закрыть
            </div>

            <div
                className={styled.modal__wrapper}
                onMouseEnter={hideBtnClose}
                onMouseLeave={showBtnClose}
            >
                <div className={styled.modal__close}>
                    <button className={styled.modal__btnClose} type="button"  ref={btnSmallCloseRef}>

                        <IconClose />

                    </button>
                </div>

                <SliderModal
                    key={idProduct}
                    arrSrc={arrSrc}
                    numImg={numImg}
                />

                <div className={styled.modal__description}>
                    <h3 className={styled.modal__title}>
                        {title}
                    </h3>

                    {arrTexts.map((item, index) => {
                        return (
                            <p
                                className={styled.modal__text}
                                key={index}>
                                {item}
                            </p>
                        )
                    })}

                    <button className={styled.modal__btn}>Заказать</button>
                </div>

            </div>


        </dialog>
    );
}

export default Modal;