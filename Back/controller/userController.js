// const User = require('../model/userModel');
import userModel from '../model/userModel.js';
import enderecoModel from '../model/enderecoModel.js';

export default class UserController {
    
    static async getAllUser(req, res) {
        try {
            const people = await userModel.find();
            return res.status(200).send({ data: people });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
        
    }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const person = await userModel.findById(id);
            return res.status(200).json(person);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
    
    static async create(req, res) {
        console.log("Chegou")
        const { nome, email, cpf, senha, dataNascimento, pais, uf, municipio, cep, bairro, logradouro, complemento } = req.body;
        console.log("Parte1")
        console.log(nome, email, cpf, senha, dataNascimento, pais, uf, municipio, cep, bairro, logradouro, complemento)
        
        if (!nome || !email || !cpf || !senha || !dataNascimento || !pais || !uf || !municipio || !cep || !bairro || !logradouro || !complemento)
        return
        
        console.log("Parte3")
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
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" })
    }

    static async delete(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" });

        try {
            await userModel.findByIdAndDelete(id);
            return res.status(200).send({ message: "Person deleted successfully" })
        } catch (error) {
            return res.status(500).send({ message: "Something failled" })
        }
    }

}

