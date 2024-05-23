import styles from './styles.module.scss';
import Image from "react-bootstrap/Image";
import decoration1 from "./decoration1.png";
import logo from "./logosemname.png";
import nome from "./nome.png";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Star from '../Star';
import axios from 'axios';
import imagemcard from './Cadastro.png'; // Importe a imagem do card

const items = [...Array(5).keys()];

function HomeComponent() {
    const [index, setIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0); // Inicialize com 0 para mostrar o primeiro item no carrossel
    const [taxas, setTaxas] = useState([]);

    useEffect(() => {
        const fetchTaxas = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/taxa/status1');
                setTaxas(response.data.data);
            } catch (error) {
                console.error('Erro ao buscar taxas:', error);
            }
        };

        fetchTaxas();
    }, []);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const onClickStar = (index) => {
        setActiveIndex((oldState) => (oldState === index ? undefined : index));
    };

    const handleStarClick = (taxaIndex, starIndex) => {
        setTaxas((prevTaxas) => {
            const updatedTaxas = [...prevTaxas];
            updatedTaxas[taxaIndex].avaliacao = starIndex + 1; // +1 para considerar avaliação de 1 a 5
            return updatedTaxas;
        });
    };

    const handleCandidatar = async (taxaID) => {
        const data = { status: 2 };

        try {
            const response = await axios.put(`http://localhost:3000/api/taxa/status/${taxaID}`, data);

            if (response.status === 201) {
                console.log('Status da taxa atualizado com sucesso.');
            } else {
                console.error('Erro ao atualizar status da taxa:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao atualizar status da taxa:', error);
        }
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

                <Carousel activeIndex={index} onSelect={handleSelect} className={styles.alinha}>
                    {taxas.map((taxa, i) => (
                        <Carousel.Item key={i}>
                            <b className={styles.label}>{taxa.Titulo}</b>
                            <div className={styles.container}>
                                {[...Array(5).keys()].map((starIndex) => (
                                    <Star
                                        key={`star_${starIndex}`}
                                        isActive={starIndex < taxa.avaliacao}
                                        onClick={() => handleStarClick(i, starIndex)}
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
                                    <div className={styles.but}>
                                        <button className={styles.button1} onClick={() => handleCandidatar(taxa.IDTaxa)}>
                                            Me candidatar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default HomeComponent;
