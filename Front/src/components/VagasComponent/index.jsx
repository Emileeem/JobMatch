import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'react-bootstrap/Image';
import imagemcard from './Cadastro.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Star from '../Star'; // Importe o componente Star

function VagasComponent() {
    const [taxas, setTaxas] = useState([]);

    useEffect(() => {
        const fetchTaxas = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/taxa');
                setTaxas(response.data.data);
            } catch (error) {
                console.error('Erro ao buscar taxas:', error);
            }
        };

        fetchTaxas();
    }, []);

    const handleStarClick = (taxaIndex, starIndex) => {
        setTaxas((prevTaxas) => {
            const updatedTaxas = [...prevTaxas];
            updatedTaxas[taxaIndex].avaliacao = starIndex + 1; // +1 para considerar avaliação de 1 a 5
            return updatedTaxas;
        });
    };

    return (
        <>
            <Container>
                <Row>
                    <h1 className={styles.vagas}>Taxas disponíveis</h1>
                    {taxas.map((taxa) => (
                        <Col key={taxa.IDTaxa} xs={12} md={4}>
                            <div className={styles.vaga}>
                                <div className={styles.alinha}>
                                    <b className={styles.label}>{taxa.Titulo}</b>
                                    <div className={styles.container}>
                                        {[...Array(5).keys()].map((starIndex) => (
                                            <Star
                                                key={`star_${starIndex}`}
                                                isActive={starIndex < taxa.avaliacao}
                                                onClick={() => handleStarClick(taxas.indexOf(taxa), starIndex)}
                                            />
                                        ))}
                                    </div>
                                    <div className={styles.card}>
                                        <Image className={styles.imagemcard} src={imagemcard} />
                                        <p className={styles.titulo}>{taxa.Titulo}</p>
                                        <div className={styles.resto}>
                                            <p>{taxa.Descricao}</p>
                                            <p>Início: {new Date(taxa.DataInicio).toLocaleDateString()}</p>
                                            <p>Término: {new Date(taxa.DataTermino).toLocaleDateString()}</p>
                                            <p>Valor: {taxa.Valor}</p>
                                            <p>Quantidade: {taxa.QtdTaxa}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default VagasComponent;
