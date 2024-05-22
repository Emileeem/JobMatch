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
    const [cpf, setCpf] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [pais, setPais] = useState("")
    const [uf, setUF] = useState("")
    const [municipio, setMunicipio] = useState("")
    const [cep, setCEP] = useState(0)
    const [bairro, setBairro] = useState("")
    const [complemento, setComplemento] = useState("");
    const [senha, setSenha] = useState("");
    const [user, setUser] = useState([]);

    async function getUser() {
        try {
            const res = await axios.get("http://localhost:3000/api/enderecouser/1");
            console.log(res)

            const user = res.data.user;
            const endereco = res.data.endereco;
            setUser(user);
            setNomeCompleto(user.Nome);
            const nomeArray = user.Nome.split(' ');
            const nome = nomeArray[0];
            const sobrenome = nomeArray.slice(1).join(' ');
    
            setNome(nome);
            setSobrenome(sobrenome);
            setEmail(user.Email);
            setCpf(user.Cpf)
            setDataNasc(user.DataNascimento);
            setPais(endereco.Pais);
            setUF(endereco.UF);
            setMunicipio(endereco.Municipio);
            setCEP(endereco.Cep);
            setBairro(endereco.Bairro);
            setComplemento(endereco.Complemento);
            setComplemento(user.Senha);

        } catch (error) {
            console.error("Erro ao buscar o usuário:", error);
        }
    }

    async function UpdateUser(id, nome, sobrenome, email, cpf, senha, pais, uf, municipio, cep, bairro, complemento) {
        try {
            const nomeCompleto = nome + " " + sobrenome;
            // `http://localhost:3000/api/enderecouser/${id}`,
            const res = await axios.put(`http://localhost:3000/api/enderecouser/1`, {
                nome,
                email,
                cpf,
                senha,
                endereco: {
                    pais,
                    uf,
                    municipio,
                    cep,
                    bairro,
                    complemento
                },
            });
            location.reload(true);
            const user = res.data.user;
            const endereco = res.data.endereco;

            console.log("Teste")
            console.log(res)

        } catch (error) {
            console.error("Erro ao buscar o usuário:", error);
        }
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
                        <input type="text" placeholder="| CPF" id="Cpf" value={cpf} onChange={(event) => setCpf(event.target.value)} className={styles.input} />
                        <input type="text" placeholder="| Uf" id="UF" value={uf} className={styles.input} onChange={(event) => setUF(event.target.value)}/>
                        <input type="text" placeholder="| Bairro" id="Bairro" value={bairro} className={styles.input} onChange={(event) => setBairro(event.target.value)}/>                       
                    </div>
                    <div className={styles.inputs}>
                        
                        <input type="text" placeholder="| Sobrenome" id="Sobrenome" value={sobrenome} className={styles.input} onChange={(event) => setSobrenome(event.target.value)}/>
                        <input type="date" placeholder="| DataNasc" id="DataNasc" value={dataNasc} className={styles.input} onChange={(event) => setDataNasc(event.target.value)}/>
                        <input type="text" placeholder="| Município" id="Municipio" value={municipio} className={styles.input} onChange={(event) => setMunicipio(event.target.value)}/>
                        <input type="text" placeholder="| Complemento" id="Complemento" value={complemento} className={styles.input} onChange={(event) => setComplemento(event.target.value)}/>

                    </div>
                    <div className={styles.inputs}>
                        <input type="text" placeholder="| Email" id="Email" value={email} className={styles.input} onChange={(event) => setEmail(event.target.value)}/>
                        <input type="text" placeholder="| País" id="Pais" value={pais} className={styles.input} onChange={(event) => setPais(event.target.value)}/>
                        <input type="number" placeholder="| CEP" id="Cep" value={cep} className={styles.input} onChange={(event) => setCEP(event.target.value)}/>
                        <input type="password" placeholder="| Senha" id="Senha" value={senha} className={styles.input} onChange={(event) => setSenha(event.target.value)}/>
                       
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() =>UpdateUser(nome, sobrenome, email, cpf, senha, pais, uf, municipio, cep, bairro, complemento)}> Salvar Alterações </button>
                </div>
            </div>
        </>
    );
}

export default PerfilComponent;

