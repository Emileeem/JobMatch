import styles from './styles.module.scss';
import Stack from 'react-bootstrap/Stack';
import Image from "react-bootstrap/Image";
import exit from "./exit.png";
import add from "./add.png";
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <div className={styles.navContainer}>
                <Link to="/vagas" className={styles.navItem}>Vagas</Link>
                <Link to="/perfil" className={styles.navItem}>Perfil</Link>
                <Link to="/taxasAgendadas" className={styles.navItem}>Taxas Agendadas</Link>
                <Link to="/taxasConcluidas" className={styles.navItem}>Taxas Concluídas</Link>
                <Link to="/adicionarVagas" className={styles.navItem}>Adicionar Vagas</Link>
            {/* <Image className={styles.add} src={add} /> */}
            </div>

            <Image className={styles.exit} src={exit} />
        </>
    );
}
export default Nav;