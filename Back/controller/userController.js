// const User = require('../model/userModel');
import userModel from '../model/userModel.js';
import enderecoModel from '../model/enderecoModel.js';

export default class UserController {
    
    // static async getAllUser(req, res) {
    //     try {
    //         const people = await userModel.find();
    //         return res.status(200).send({ data: people });
    //     } catch (error) {
    //         return res.status(500).send({ error: error });
    //     }
        
    // }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await userModel.findByPk(id);
            return res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    
    static async create(req, res) {
        console.log("Chegou")
        const { nome, email, cpf, senha, dataNascimento, pais, uf, municipio, cep, bairro, logradouro, complemento } = req.body;
        console.log(nome, email, cpf, senha, dataNascimento, pais, uf, municipio, cep, bairro, logradouro, complemento)
        
        if (!nome || !email || !cpf || !senha || !dataNascimento || !pais || !uf || !municipio || !cep || !bairro || !logradouro || !complemento)
        return
        
        try {
            const endereco = 
            {
                Pais: pais,
                UF: uf, 
                Municipio: municipio,
                Cep: cep,
                Bairro: bairro,
                Logradouro: logradouro,
                Complemento: complemento
            }
            
            const createdAddress = await enderecoModel.create(endereco)
            // console.log(createdAddress);
            console.log(createdAddress.IDEndereco);
            const obj =
            {
                Nome: nome,
                Email: email,
                Cpf: cpf,
                Senha: senha,
                DataNascimento: dataNascimento,
                Endereco: createdAddress.IDEndereco
            }
            
            const createdUser = await userModel.create(obj);
            
            return res.status(201).send({ message: "Pessoa inserida com sucesso", body: createdUser })

        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            return res.status(500).send({ error: error })
        }
    }

    static async update(req, res) {    
        const { nome, email, cpf, senha, dataNascimento, pais, uf, municipio, cep, bairro, logradouro, complemento, IDEndereco } = req.body;
        console.log(req.body)
        console.log("1 !!!!")

        const { id } = req.params;

        if (!nome || !email || !cpf || !senha || !dataNascimento || !pais || !uf || !municipio || !cep || !bairro || !logradouro || !complemento)
            return
        console.log("2 !!!!")
        
        const endereco = await enderecoModel.findByPk(IDEndereco);
        console.log(endereco)
        if (!endereco) {
            return res.status(404).json({ error: 'Endereco not found' });
        }
        console.log("3 !!!!")
        
        if (!id)
        return res.status(400).send({ message: "No id provider" })
        const IDUser = id
        console.log("4 !!!!")
        
        try {
            const p = await userModel.update(
                {
                    Nome: nome,
                    Email: email,
                    Cpf: cpf,
                    Senha: senha,
                    DataNascimento: dataNascimento,
                    IDEndereco: endereco.id,
                },
                {
                    where: {
                        IDUser: IDUser
                    }
                }
            );
            console.log("5 !!!!")
            return res.status(201).send({ message: "User Editado com sucesso", body: p })
            
        } catch (error) {
                return res.status(500).send({ error: error })
            }
    }

    static async delete(req, res) {
        const { id } = req.params;
        const IDUser = id
        if (!id)
            return res.status(400).send({ message: "No id provider" });

        try {
            const p = await taxaModel.destroy({where: {IDUser}});
            return res.status(200).send({ message: "User Deletado com sucesso", body: p })
        } catch (error) {
            return res.status(500).send({ message: error })
        }
    }

}

