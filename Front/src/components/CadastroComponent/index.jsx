import styles from "./style.module.scss"
import logo from "../../Img/logo.png"


function CadastroComponent(){
    return (
    <div className={styles.background}>
    <div className={styles.body}>
        <div className={styles.inside}>
          <div className={styles.title}>
            <img src={logo} className={styles.logo} />
          <h1>
            Cadastre-se
          </h1>
          </div>
          <div className={styles["wrap-inputs"]}>
            <div className={styles.inputs}>
              <input type="text" placeholder="| Nome" className={styles.input} />
              <input type="text" placeholder="| Sobrenome" className={styles.input} />
              <input type="date" placeholder="| DataNasc" className={styles.input} />
            </div>
            <div className={styles.inputs}>
              <input type="text" placeholder="| País" className={styles.input} />
              <input type="text" placeholder="| Uf" className={styles.input} />
              <input type="number" placeholder="| CEP" className={styles.input} />
              <input type="text" placeholder="| Cidade" className={styles.input} />
              <input type="text" placeholder="| Bairro" className={styles.input} />
            </div>
            <div className={styles.inputs}>
              <input type="text" placeholder="| Complemento" className={styles.input} />
              <input type="password" placeholder="| Senha" className={styles.input} />
              <input type="password" placeholder="| Confirmar Senha" className={styles.input} />
            </div>
          </div>
          <button className={styles.button}> Cadastrar </button>
        </div>
    </div>
    </div>
    );
  }
  
  export default CadastroComponent;