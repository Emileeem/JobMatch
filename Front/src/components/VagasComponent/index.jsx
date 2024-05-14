import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'react-bootstrap/Image';
import decoration1 from './decoration1.png';
import logo from './logosemname.png';
import { Link } from 'react-router-dom';
import Star from '../Star';

const items = [...Array(5).keys()];

function VagasComponent() {
    const [activeIndex, setActiveIndex] = useState();

    const onClickStar = (index) => {
        setActiveIndex((oldState) => (oldState === index ? undefined : index));
    };

    return (
        <>
            <div className="d-flex flex-column align-items-start">
                <Link to="/home">
                    <Image className={styles.logo} src={logo} />
                </Link>
                <Image className={styles.img} src={decoration1} />
                <div className={styles.alinha}>
                    <b className={styles.label}>Barman</b>
                    <div className="container">
                        {items.map((index) => (
                            <Star
                                onClick={() => onClickStar(index)}
                                key={`star_${index}`}
                                isActive={index <= (activeIndex ?? -1)}
                            />
                        ))}
                    </div>
                    <div className={styles.card}></div>
                </div>
            </div>
        </>
    );
}

export default VagasComponent;
