import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'react-bootstrap/Image';
import decoration1 from './decoration1.png';
import logo from './logosemname.png';
import { Link } from 'react-router-dom';
import Star from '../Star';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const items = [...Array(5).keys()];

function TaxasConcluidasComponent() {
    const [activeIndex, setActiveIndex] = useState();

    const onClickStar = (index) => {
        setActiveIndex((oldState) => (oldState === index ? undefined : index));
    };

    return (
        <>
            <Container>
                <Row>
                    <h1 className={styles.vagas}>Concluídas:</h1>
                    {[...Array(3).keys()].map((rowIndex) => (
                        <React.Fragment key={`row_${rowIndex}`}>
                            {[...Array(3).keys()].map((colIndex) => (
                                <Col key={`col_${colIndex}`} xs={12} md={4}>
                                    <Link to="/home">
                                        <Image className={styles.logo} src={logo} />
                                    </Link>
                                    <Image className={styles.img} src={decoration1} />
                                    <div className={styles.vaga}>
                                        <div className={styles.alinha}>
                                            <b className={styles.label}>Barman - 20/05/2023</b>
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
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default TaxasConcluidasComponent;




