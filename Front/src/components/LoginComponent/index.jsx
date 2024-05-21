import React, { useState } from 'react';
import styles from "./style.module.scss";
import logo from "../../Img/logo.png";
import eyeIconOpen from '../../Img/olhoAb.png';
import eyeIconClose from '../../Img/olhoFec.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState('password');
    const [eyeIconSrc, setEyeIconSrc] = useState(eyeIconClose);
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setInputType(showPassword ? 'password' : 'text');
        setEyeIconSrc(showPassword ? eyeIconClose : eyeIconOpen);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                cpf,
                password
            });
            if (response.status === 200) {
                console.log("Usuário logado com sucesso!");
                navigate('/home');
            } else {
                console.error("Erro ao fazer login:", response.data.message);
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Os dados não conferem!")
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.body}>
                <div className={styles.welcome}>
                    <img src={logo} className={styles.logo} alt="Logo" />
                    <h2> BEM VINDO</h2>
                    <div className={styles.left}>
                        <h1> Novo Login </h1>
                        <hr className={styles.linha} />
                    </div>
                    <a className={styles.button} href='/register'> Criar Conta </a>
                </div>
                <div className={styles.logar}>
                    <h1> Faça o seu Login </h1>
                    <input 
                        type="number" 
                        placeholder="| CPF" 
                        className={styles.input1} 
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                    <div className={styles.inputDiv}>
                        <input 
                            type={inputType} 
                            placeholder="| ******" 
                            className={styles.input2}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                         />
                        <img
                            src={eyeIconSrc} 
                            className={styles.eyeIcon}
                            onClick={togglePasswordVisibility}
                            />
                    </div>
                    <button className={styles.entrar} onClick={handleSubmit}>Entrar</button>
                    <br/>
                    <b className={styles.cadastro2}>
                        Não tem uma conta?
                    </b>
                    <a className={styles.cadastro} href='/register'>
                     Cadastre-se
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
