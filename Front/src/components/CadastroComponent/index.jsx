import styles from "./style.module.scss"
import logo from "../../Img/logo.png"
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function CadastroComponent(){
    const [sobrenome, setSobrenome] = useState("");
    const [primeiroNome, setPrimeiroNome] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setDataNasc] = useState("");
    const [endereco, setEndereco] = useState({});
    const [pais, setPais] = useState("");
    const [uf, setUf] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [cep, setCep] = useState("");
    const [bairro, setBairro] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [complemento, setComplemento] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");
    useEffect(() => {
        setNome(primeiroNome + " " + sobrenome);
    }, [primeiroNome, sobrenome]);

    const handleCadastro = async () => {
      const usuario = {
          nome: primeiroNome + " " + sobrenome,
          email,
          cpf,
          senha,
          dataNascimento,
          endereco: {
              pais,
              uf,
              municipio,
              cep,
              bairro,
              logradouro,
              complemento
          }
      };

      try {
          const response = await fetch('http://localhost:3000/api/user', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(usuario)
          });
          if(senha === confirmSenha)
          {
            if (response.ok) {
                const data = await response.json();
                console.log('Usuário cadastrado:', data);
            } else {
                console.error('Erro ao cadastrar usuário:', response.statusText);
            }
          }
          else
          {
            alert("As Senhas não Conferem!")
          }
      } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
      }
    };

    return (
    <div className={styles.background}>
    <div className={styles.body}>
        <div className={styles.inside}>
          <div className={styles.title}>
          <Link to="/">
            <img src={logo} className={styles.logo} />
            </Link>
          <h1>
            Cadastre-se
          </h1>
          </div>
          <div className={styles["wrap-inputs"]}>
            <div className={styles.inputs}>
              <input 
                type="text" 
                placeholder="| Nome" 
                className={styles.input} 
                value={primeiroNome}
                onChange={(e) => setPrimeiroNome(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="| Sobrenome" 
                className={styles.input} 
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="| CPF" 
                className={styles.input} 
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <input 
                type="date" 
                placeholder="| DataNasc" 
                className={styles.input} 
                value={dataNascimento}
                onChange={(e) => setDataNasc(e.target.value)}
              />
            </div>
            <div className={styles.inputs}>
              <input 
                type="text" 
                placeholder="| País" 
                className={styles.input} 
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="| Uf" 
                className={styles.input} 
                value={uf}
                onChange={(e) => setUf(e.target.value)}
              />
              <input 
                type="number" 
                placeholder="| CEP" 
                className={styles.input} 
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="| Cidade" 
                className={styles.input} 
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="| Bairro" 
                className={styles.input} 
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div className={styles.inputs}>
              <input 
                type="text" 
                placeholder="| Complemento" 
                className={styles.input} 
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="| Email" 
                className={styles.input} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="| Senha" 
                className={styles.input} 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <input 
                type="password"
                placeholder="| Confirmar Senha"
                className={styles.input} 
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
              />
            </div>
          </div>
          <button className={styles.button} onClick={handleCadastro}> Cadastrar </button>
        </div>
    </div>
    </div>
    );
  }
  
  export default CadastroComponent;
