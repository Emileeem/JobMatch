// const User = require('../model/userModel');
import userModel from '../model/userModel.js';
import enderecoModel from '../model/enderecoModel.js';

export default class UserController {
    
    static async getAllUser(req, res) {
        try {
            const people = await userModel.findAll();
            return res.status(200).send({ data: people });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await userModel.findByPk(id);
            return res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static async getUserEnderecoById(req, res) {
        const { id } = req.params;
        try {
            const user = await userModel.findByPk(id);
            const endereco = await enderecoModel.findByPk(id);
            return res.status(200).json({user, endereco});
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    
    
    static async create(req, res) {
        const { nome, email, cpf, senha, dataNascimento, endereco } = req.body;
        console.log(nome, email, cpf, senha, dataNascimento, endereco)
        
        if (!nome || !email || !cpf || !senha || !dataNascimento || !endereco)
            return res.status(400).send({message: "parametro vazio"})

        if (nome.Lengh > 60 || email.Lengh > 50 || cpf.Lengh > 11)
            return res.status(413).send({message: "Você ultrapassou o limite de caracter"})
        
        try {
            const endereco_user = 
            {
                Pais: endereco.pais,
                UF: endereco.uf, 
                Municipio: endereco.municipio,
                Cep: endereco.cep,
                Bairro: endereco.bairro,
                Logradouro: endereco.logradouro,
                Complemento: endereco.complemento
            }
            
            const createdAddress = await enderecoModel.create(endereco_user)
            console.log(createdAddress.IDEndereco);
            const obj =
            {
                Nome: nome,
                Email: email,
                Cpf: cpf,
                Senha: senha,
                DataNascimento: dataNascimento,
                IDEndereco: createdAddress.IDEndereco
            }
            
            const createdUser = await userModel.create(obj);
            
            return res.status(201).send({ message: "Usuario cadastrado com sucesso", body: createdUser })

        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            return res.status(500).send({ error: error })
        }
    }

    static async updateUsuarioEndereco(req, res){

        const { nome, email, cpf, senha, dataNascimento ,endereco} = req.body;
        console.log(nome, email, cpf, senha, endereco)

        const { id } = req.params;

        if (!nome || !email || !cpf || !senha)
            return
        
        if (nome.Lengh > 60 || email.Lengh > 50 || cpf.Lengh > 11)
            return res.status(413).send({message: "Você ultrapassou o limite de caracter"})
        
        if (!id)
        return res.status(400).send({ message: "Id não providenciado" })
        const IDUsuario = id
        const IDEndereco = id

        console.log("1")
        try {
            const user = await userModel.update(
                {
                    Nome: nome,
                    Email: email,
                    Cpf: cpf,
                    Senha: senha,
                    IDEndereco: IDEndereco,
                },
                {
                    where: {
                        IDUsuario: IDUsuario
                    }
                }
            );
            console.log(user)
            console.log(IDEndereco)
            const enderecos = await enderecoModel.update({
                Pais: endereco.pais,
                UF: endereco.uf, 
                Municipio: endereco.municipio,
                Cep: endereco.cep,
                Bairro: endereco.bairro,
                Logradouro: endereco.logradouro,
                Complemento: endereco.complemento
            },
            {
                where: {
                    IDEndereco: IDEndereco
                }
            }
        );
            console.log(endereco)
            console.log("2")
            return res.status(201).send({ message: "Usuário e Endereco Atualizado com sucesso", body: user, enderecos })
        } catch (error) {
            return res.status(500).send({ error: error })
        }
    }

    static async updateUsuario(req, res) {    
        const { nome, email, cpf, senha, dataNascimento, IDEndereco } = req.body;
        console.log(nome, email, cpf, senha, dataNascimento, IDEndereco)

        const { id } = req.params;

        if (!nome || !email || !cpf || !senha || !dataNascimento || !IDEndereco)
            return
        
        if (nome.Lengh > 60 || email.Lengh > 50 || cpf.Lengh > 11)
            return res.status(413).send({message: "Você ultrapassou o limite de caracter"})
        
        const endereco_user = await enderecoModel.findByPk(IDEndereco);
        console.log(endereco_user)
        if (!endereco_user) {
            return res.status(404).json({ error: 'Endereco não encontrado' });
        }
        
        if (!id)
        return res.status(400).send({ message: "id não providenciado" })
        const IDUsuario = id
        
        try {
            const user = await userModel.update(
                {
                    Nome: nome,
                    Email: email,
                    Cpf: cpf,
                    Senha: senha,
                    DataNascimento: dataNascimento,
                    IDEndereco: IDEndereco,
                },
                {
                    where: {
                        IDUsuario: IDUsuario
                    }
                }
            );
            return res.status(201).send({ message: "Usuário Atualizado com sucesso", body: user })
        } catch (error) {
                return res.status(500).send({ error: error })
            }
    }

    static async updateEndereco(req, res) {    
        const { endereco } = req.body;
        console.log(endereco)

        const { id } = req.params;

        if (!endereco)
            return
        
        if (!id)
        return res.status(400).send({ message: "id não providenciado" })
        const IDEndereco = id
        
        try {
            const enderecos = await enderecoModel.update({
                    Pais: endereco.pais,
                    UF: endereco.uf, 
                    Municipio: endereco.municipio,
                    Cep: endereco.cep,
                    Bairro: endereco.bairro,
                    Logradouro: endereco.logradouro,
                    Complemento: endereco.complemento
                },
                {
                    where: {
                        IDEndereco: IDEndereco
                    }
                }
            );
            return res.status(201).send({ message: "Endereco atualiado com sucesso", body: enderecos })
        } catch (error) {
                return res.status(500).send({ error: error })
            }
    }

    static async delete(req, res) {
        const { id } = req.params;
        const IDUsuario = id
        if (!id)
            return res.status(400).send({ message: "id não providenciado" });

        try {
            const p = await taxaModel.destroy({where: {IDUsuario}});
            return res.status(200).send({ message: "Usuário Deletado com sucesso", body: p })
        } catch (error) {
            return res.status(500).send({ message: error })
        }
    }

}


