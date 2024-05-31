import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from './index.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import products from './products';
import Modal from 'components/Modal';


function MainPage() {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [arrSrc, setArrSrc] = useState([]);
    const [title, setTitle] = useState('');
    const [arrTexts, setArrTexts] = useState([]);
    const [numImg, setNumImg] = useState('');
    const [idProduct, setIdProduct] = useState('');

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const handleClick = (e) => {
        let currentNumber = e.target.currentSrc.replace(/[^0-9]/g, '').slice(-5, -2);
        let newArrTexts = [];
        let arrSrcAvif = [];

        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            if (element.id.replace(/[^0-9]/g, '') === currentNumber) {
                setIdProduct(element.id);
                setTitle(element.title);

                for (let key in element) {
                    if (key.includes('src_')) {
                        arrSrcAvif.push(element[key]);

                        if (element[key].replace(/[^0-9]/g, '').slice(-2) === e.target.src.replace(/[^0-9]/g, '').slice(-2)) {
                            setNumImg(+key.replace(/[^0-9]/g, '') - 1);
                        }
                    }

                    if (key.startsWith('description') && element[key] !== '') {
                        newArrTexts.push(element[key]);
                    }
                }

                setArrSrc(arrSrcAvif);
                setArrTexts(newArrTexts);
                break;
            }
        }

        setShowModal(true);
    }

    return (
        <div className={styled.wrapper}>

            <Header
            // performSearch={performSearch}
            />

            <Outlet
                context={[(e) => handleClick(e)]}
            />

            <Footer />



            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                arrSrc={arrSrc}
                setArrSrc={setArrSrc}
                title={title}
                setTitle={setTitle}
                arrTexts={arrTexts}
                setArrTexts={setArrTexts}
                numImg={numImg}
                setNumImg={setNumImg}
                idProduct={idProduct}
            />

        </div>
    );
}

export default MainPage;