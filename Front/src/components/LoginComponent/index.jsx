import React, { useState } from 'react';

import styles from "./style.module.scss"
import logo from "../../Img/logo.png"
import eyeIconOpen from '../../Img/olhoAb.png';
import eyeIconClose from '../../Img/olhoFec.png';

function LoginComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState('password');
    const [eyeIconSrc, setEyeIconSrc] = useState(eyeIconClose);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setInputType(showPassword ? 'password' : 'text');
        setEyeIconSrc(showPassword ? eyeIconClose : eyeIconOpen);
    };
    return (
        <>
            <div className={styles.body}>
                <div className={styles.welcome}>
                    <img src={logo} className={styles.logo} />
                    <h2> BEM VINDO</h2>
                    <div className={styles.left}>
                        <h1> Novo Login </h1>
                        <hr className={styles.linha} />
                    </div>
                    <a className={styles.button} href='/register'> Criar Conta </a>
                </div>

                <div className={styles.logar}>
                    <h1> Faça o seu Login </h1>
                    <input type="number" placeholder="| CPF" className={styles.input1} />
                    <div className={styles.inputDiv}>

                        <input type={inputType} placeholder="| ******" className={styles.input2} />
                        <img
                            src={eyeIconSrc} 
                            className={styles.eyeIcon}
                            onClick={togglePasswordVisibility}
                            />
                    </div>
                    <button className={styles.entrar}>Entrar</button>
                    <br/>
                    <b className={styles.cadastro2}>
                        Não tem uma conta?
                    </b>
                    <a className={styles.cadastro} href='/register'>
                     Cadastre-se
                    </a>
                </div>
            </div>
        </>
    );
}

export default LoginComponent;