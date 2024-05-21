import styles from './styles.module.scss';
import decoration1 from "../../assets/decoration1.png";
import logo from "../../assets/logosemname.png";
import Image from "react-bootstrap/Image";

function PerfilComponent() {
    return (
        <>
            <div>
                <Image className={styles.logo} src={logo} />
                <Image className={styles.img} src={decoration1}/>
                <div className={styles.title}>
                    <h1>
                        Editar Perfil
                    </h1>
                </div>
                <div className={styles["wrap-inputs"]}>
                    <div className={styles.inputs}>
                        <input type="text" placeholder="| Nome Completo" className={styles.input} />
                        <input type="date" placeholder="| DataNasc" className={styles.input} />
                        <input type="text" placeholder="| Município" className={styles.input} />
                        <input type="text" placeholder="| Complemento" className={styles.input} />
                    </div>
                    <div className={styles.inputs}>
                        
                        <input type="text" placeholder="| Sobrenome" className={styles.input} />
                        <input type="text" placeholder="| País" className={styles.input} />
                        <input type="number" placeholder="| CEP" className={styles.input} />
                        <input type="password" placeholder="| Senha" className={styles.input} />
                    </div>
                    <div className={styles.inputs}>
                    <input type="text" placeholder="| Email" className={styles.input} />
                        <input type="text" placeholder="| Uf" className={styles.input} />
                        <input type="text" placeholder="| Bairro" className={styles.input} />
                        <input type="password" placeholder="| Confirmar Senha" className={styles.input} />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button}> Salvar Alterações </button>
                </div>
            </div>
        </>
    );
}

export default PerfilComponent;




