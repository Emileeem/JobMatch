import styles from './styles.module.scss';
import Image from 'react-bootstrap/Image';
import decoration1 from './decoration1.png';
import logo from './logosemname.png';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from "react";
import axios from "axios";

function AdicionarVagasComponent() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataTermino, setDataTermino] = useState("");
    const [valor, setValor] = useState("");
    const [qtdTaxa, setQtdTaxa] = useState("");

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     if (!formValid()) return;
    //     try {
    //         const response = await axios.post("http://localhost:3000/api/taxa", {
    //             titulo: titulo,
    //             descricao: descricao,
    //             dataInicio: dataInicio,
    //             dataTermino: dataTermino,
    //             valor: valor,
    //             qtdTaxa: quantidadedePessoas,
    //             IDEndereco: 1,
    //             IDUsuario: 1
    //         });

    //         console.log(response.data);

    //     } catch (error) {
    //         console.error("Erro ao adicionar vagas:", error);
    //     }
    // }

    // function formValid() {
    //     if (titulo.trim() === "") {
    //         setMessage("O campo não pode estar vazio.");
    //         setShow(true);
    //         setVariant("danger");
    //         return false;
    //     }
    //     if (descricao.trim() === "") {
    //         setMessage("O campo não pode estar vazio.");
    //         setShow(true);
    //         setVariant("danger");
    //         return false;
    //     }
    //     if (dataInicio.trim() === "") {
    //         setMessage("O campo não pode estar vazio.");
    //         setShow(true);
    //         setVariant("danger");
    //         return false;
    //     }
    //     if (dataTermino.trim() === "") {
    //         setMessage("O campo não pode estar vazio.");
    //         setShow(true);
    //         setVariant("danger");
    //         return false;
    //     }
    //     if (valor.trim() === "") {
    //         setMessage("O campo não pode estar vazio.");
    //         setShow(true);
    //         setVariant("danger");
    //         return false;
    //     }

    //     if (quantidadedePessoas.trim() === "") {
    //         setMessage("O campo não pode estar vazio.");
    //         setShow(true);
    //         setVariant("danger");
    //         return false;
    //     }
    //     if (!descricao.trim()) {
    //         setMessage("Sua descrição deve ser maior");
    //         setShow(true);
    //         setVariant("danger");
    //         return false;
    //     }
    //     return true;
    // }

    const handleSubmit = async () => {
        const taxa = {
            titulo,
            descricao,
            dataInicio,
            dataTermino,
            valor,
            qtdTaxa,
            IDEndereco: 1,
            IDUsuario: 1

            // IDEndereco: endereco.IDEndereco,
            // IDUsuario: usuario.IDUsuario
        };

        try {
            const response = await fetch('http://localhost:3000/api/taxa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taxa)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Taxa cadastrado:', data);
            } else {
                console.error('Erro ao adicionar taxa:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao adicionar taxa:', error);
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
                        <button className={styles.btn} onClick={handleSubmit} >Adicionar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdicionarVagasComponent;
