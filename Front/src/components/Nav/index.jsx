import React, { useState } from 'react'; // Importe o useState
import styles from './styles.module.scss';
import Image from "react-bootstrap/Image";
import exit from "./exit.png";
import { Link } from 'react-router-dom';
import menu from "../../Img/menu.png";

function Nav() {
    const [isNavVisible, setIsNavVisible] = useState(false); // Estado para controlar a visibilidade do menu

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible); // Alterna a visibilidade do menu
    };

    return (
        <>
            <div className={styles.navContainer} style={{ display: isNavVisible ? 'block' : 'none' }}>
                <Link to="/vagas" className={styles.navItem}>Vagas</Link>
                <Link to="/perfil" className={styles.navItem}>Perfil</Link>
                <Link to="/taxasAgendadas" className={styles.navItem}>Taxas Agendadas</Link>
                <Link to="/taxasConcluidas" className={styles.navItem}>Taxas Concluídas</Link>
                <Link to="/adicionarVagas" className={styles.navItem}>Adicionar Vagas</Link>
            </div>
            <Image className={styles.exit} src={exit} />
            <Image className={styles.menu} src={menu} onClick={toggleNavVisibility} />
        </>
    );
}

export default Nav;
