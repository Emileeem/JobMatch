import styles from './styles.module.scss';
import Image from 'react-bootstrap/Image';
import decoration1 from './decoration1.png';
import logo from './logosemname.png';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

function AdicionarVagasComponent() {
    return (
        <>
            <Nav />
            <Link to="/home">
                <Image className={styles.logo} src={logo} />
            </Link>
            <Image className={styles.img} src={decoration1} />
            <div className={styles.card}>
                <h1>Adicionar Vagas</h1>
                <p>Titulo</p>
                <input type="text" />
                <p>Descrição</p>
                <p>Data Início</p>
                <p>Data Termino:</p>
                <input type="text" />
                <p>Valor</p>
                <input type="float" />
                <p>Quantidade de Pessoas</p>
                <input type="text" />
            </div>
        </>
    );
}

export default AdicionarVagasComponent;




