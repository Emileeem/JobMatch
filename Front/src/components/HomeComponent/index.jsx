import styles from './styles.module.scss';
import Image from "react-bootstrap/Image";
import decoration1 from "./decoration1.png";
import logo from "./logosemname.png";
import nome from "./nome.png";
import { useState } from 'react';
import ReactDOM from 'react-dom'
import Carousel from 'react-bootstrap/Carousel';
import Item from "./Item";
import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function HomeComponent() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <>
            <Image className={styles.logo} src={logo} />
            <Image className={styles.img} src={decoration1} />
            <Image className={styles.nome} src={nome} />
            <p className={styles.paragraph}>
                é um serviço de emparelhamento de empregadores e candidatos, facilitando a conexão entre as necessidades de trabalho e as habilidades dos trabalhadores.
            </p>

            <div className={styles.button}></div>

            
        </>
    );
}

export default HomeComponent;




