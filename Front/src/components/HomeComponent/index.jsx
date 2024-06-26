import styles from './styles.module.scss';
import Image from "react-bootstrap/Image";
import decoration1 from "./decoration1.png";
import logo from "./logosemname.png";
import nome from "./nome.png";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Star from '../Star';

const items = [...Array(5).keys()];

function HomeComponent() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const [activeIndex, setActiveIndex] = useState();

    const onClickStar = (index) => {
        setActiveIndex((oldState) => (oldState === index ? undefined : index));
    };


    return (
        <>
            <Image className={styles.logo} src={logo} />
            <Image className={styles.img} src={decoration1} />
            <Image className={styles.nome} src={nome} />
            <p className={styles.paragraph}>
                é um serviço de emparelhamento de empregadores e candidatos, facilitando a conexão entre as necessidades de trabalho e as habilidades dos trabalhadores.
            </p>

            <Link to="/vagas"><div className={styles.button}><h1 className={styles.btnlabel}>Todas Vagas Disponíveis</h1></div> </Link>
            <div className="d-flex flex-column align-items-start">
                <Link to="/home">
                    <Image className={styles.logo} src={logo} />
                </Link>
                <Image className={styles.img} src={decoration1} />

                <Carousel activeIndex={activeIndex} onSelect={handleSelect} className={styles.alinha}>
                    {items.map((item, i) => (
                        <Carousel.Item key={i}>
                            {/* <div className={styles.alinha}> */}
                            <b className={styles.label}>Barman</b>
                            <div className={styles.container}>
                                {items.map((index) => (
                                    <Star
                                        onClick={() => onClickStar(index)}
                                        key={`star_${index}`}
                                        isActive={index <= (activeIndex ?? -1)}
                                    />
                                ))}
                            </div>
                            <div className={styles.card}></div>
                            {/* </div> */}
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default HomeComponent;

