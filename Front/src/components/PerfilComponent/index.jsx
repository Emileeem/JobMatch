import { useState, useEffect } from "react";
import styles from './styles.module.scss';
import decoration1 from "../../assets/decoration1.png";
import logo from "../../assets/logosemname.png";
import Image from "react-bootstrap/Image";
import axios from "axios";


function PerfilComponent() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [email, setEmail] = useState("")
    const [dataNasc, setDataNasc] = useState(new Date)
    const [pais, setPais] = useState("")
    const [uf, setUF] = useState("")
    const [municipio, setMunicipio] = useState("")
    const [cep, setCEP] = useState(0)
    const [bairro, setBairro] = useState("")
    const [complemento, setComplemento] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [user, setUser] = useState([]);

    async function getUser() {
        // const i = 1;
        const res = await axios.get("http://localhost:3000/api/user/1");
        setUser(res.data);
        console.log(res.data);
        setNome("mateus")
    }

    async function UpdateUser(nome, sobrenome, email, dataNasc, pais, uf, municipio, cep, bairro, complemento, senha, confirmarSenha) {
        // const i = 1;
        console.log(nome)
        const res = await axios.put("http://localhost:3000/api/user/1");
        setUser(res.data);
        console.log(res.data);
    }

    useEffect(() => {
        getUser();
      }, []);
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
                        <input type="text" placeholder="| Nome" id="Nome" value={nome} onChange={(event) => setNome(event.target.value)} className={styles.input} />
                        <input type="date" placeholder="| DataNasc" id="DataNasc" className={styles.input} onChange={(event) => setDataNasc(event.target.value)}/>
                        <input type="text" placeholder="| Município" id="Municipio" className={styles.input} onChange={(event) => setMunicipio(event.target.value)}/>
                        <input type="text" placeholder="| Complemento" id="Complemento" className={styles.input} onChange={(event) => setComplemento(event.target.value)}/>
                    </div>
                    <div className={styles.inputs}>
                        
                        <input type="text" placeholder="| Sobrenome" id="Sobrenome" className={styles.input} onChange={(event) => setSobrenome(event.target.value)}/>
                        <input type="text" placeholder="| País" id="Pais" className={styles.input} onChange={(event) => setPais(event.target.value)}/>
                        <input type="number" placeholder="| CEP" id="Cep" className={styles.input} onChange={(event) => setCEP(event.target.value)}/>
                        <input type="password" placeholder="| Senha" id="Senha" className={styles.input} onChange={(event) => setSenha(event.target.value)}/>
                    </div>
                    <div className={styles.inputs}>
                    <input type="text" placeholder="| Email" id="Email" className={styles.input} onChange={(event) => setEmail(event.target.value)}/>
                        <input type="text" placeholder="| Uf" id="UF" className={styles.input} onChange={(event) => setUF(event.target.value)}/>
                        <input type="text" placeholder="| Bairro" id="Bairro" className={styles.input} onChange={(event) => setBairro(event.target.value)}/>
                        <input type="password" placeholder="| Confirmar Senha" id="ConfirmarSenha" className={styles.input} onChange={(event) => setConfirmarSenha(event.target.value)}/>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() =>UpdateUser(nome, sobrenome, email, dataNasc, pais, uf, municipio, cep, bairro, complemento, senha, confirmarSenha)}> Salvar Alterações </button>
                </div>
            </div>
        </>
    );
}

export default PerfilComponent;

