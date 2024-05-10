import styles from './styles.module.scss';
import Stack from 'react-bootstrap/Stack';
import Image from "react-bootstrap/Image";
import exit from "./exit.png";

function Nav() {
    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.navItem}>Vagas</div>
                <div className={styles.navItem}>Perfil</div>
                <div className={styles.navItem}>Taxas Agendadas</div>
                <div className={styles.navItem}>Taxas Concluídas</div>
            </div>

            <Image className={styles.exit} src={exit} />
        </>
    );
}
export default Nav;