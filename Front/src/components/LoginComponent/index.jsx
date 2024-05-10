import styles from "./style.module.scss"
import logo from "../../Img/logo.png"
import user from "../../Img/user.png"
function LoginComponent() {
  return (
    <>
        <div className={styles.body}>
                    <div className={styles.welcome}>
                        <img src={logo} className={styles.logo}/>
                        <h2> BEM VINDO</h2>
                        <div className={styles.left}>
                            <h1> Novo Login </h1>
                            <hr className={styles.linha}/>
                        </div>
                        <button className={styles.button}> Criar Conta </button>
                    </div>

                    <div className={styles.logar}>
                        <h1> Faça o seu Login </h1>
                        <input type="text" placeholder="CPF"/>
                        <input type="password" placeholder="******"/>
                    </div>
        </div>
    </>
  );
}

export default LoginComponent;