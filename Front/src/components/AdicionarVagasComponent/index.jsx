import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'react-bootstrap/Image';
import decoration1 from './decoration1.png';
import logo from './logosemname.png';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function AdicionarVagasComponent() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataTermino, setDataTermino] = useState("");
    const [valor, setValor] = useState("");
    const [qtdTaxa, setQtdTaxa] = useState("");
    const [notification, setNotification] = useState("");
    const history = useHistory();

    const handleSubmit = async () => {
        const formatDate = (dateString) => {
            const [day, month, year] = dateString.split('/');
            return `${year}-${month}-${day}`;
        };

        const currentDate = new Date();
        const startDate = new Date(dataInicio);
        if (startDate < currentDate) {
            setNotification("A data de início deve ser igual ou maior que a data atual!");
            return;
        }

        const taxa = {
            titulo,
            descricao,
            dataInicio: formatDate(dataInicio),
            dataTermino: formatDate(dataTermino),
            valor,
            statusTaxa: 1,
            qtdTaxa,
            IDEndereco: 1,
            IDUsuario: 1
        };

        try {
            const response = await fetch('http://localhost:3000/api/taxa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taxa)
            });

            if (response.status === 201) {
                history.push('/vagas');
            } else {
                const errorData = await response.json();
                setNotification(errorData.message || "Erro ao adicionar taxa");
            }
        } catch (error) {
            console.error('Erro ao adicionar taxa:', error);
            setNotification("Erro ao adicionar taxa");
        }
    };
    return (
        <>
            <Nav />
            <Link to="/home">
                <Image className={styles.logo} src={logo} />
            </Link>
            <Image className={styles.img} src={decoration1} />
            <div className={styles.alinha}>
                <div className={styles.card}>
                    {notification && <div className={styles.notification}>{notification}</div>}
                    <h1>Adicionar Vagas</h1>
                    <div className={styles.form}>
                        <label className={styles.label}>
                            Titulo
                            <input className={styles.input} type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                        </label>
                        <label className={styles.label}>
                            Descrição
                            <input className={styles.input} type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </label>
                        <label className={styles.label}>
                            Data Início
                            <input className={styles.input} type="text" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
                        </label>
                        <label className={styles.label}>
                            Data Termino
                            <input className={styles.input} type="text" value={dataTermino} onChange={(e) => setDataTermino(e.target.value)} />
                        </label>
                        <label className={styles.label}>
                            Valor
                            <input className={styles.input} type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
                        </label>
                        <label className={styles.label}>
                            Quantidade de Pessoas
                            <input className={styles.input} type="text" value={qtdTaxa} onChange={(e) => setQtdTaxa(e.target.value)} />
                        </label>
                        {/* <button className={styles.btn} onClick={handleSubmit} >Adicionar</button> */}
                        <Link to="/vagas" ><button className={styles.btn} onClick={handleSubmit} >Adicionar</button></Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AdicionarVagasComponent;
