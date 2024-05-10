import styles from './styles.module.scss';
import Image from "react-bootstrap/Image";
import decoration1 from "./decoration1.png";
import logo from "./logosemname.png";

function HomeComponent() {
    return (
        <>
            <Image className={styles.logo} src={logo} />
            <Image className={styles.img} src={decoration1} />
        </>
    );
}

export default HomeComponent;