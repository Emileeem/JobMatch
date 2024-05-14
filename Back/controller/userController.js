const User = require('../model/userModel');

class UserController {

    static async getAllUser(req, res) {
        try {
            const people = await User.find();
            return res.status(200).send({ data: people });
        } catch (error) {
            return res.status(500).send({ error: error });
        }

    }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const person = await User.findById(id);
            return res.status(200).json(person);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static async create(req, res) {
        const { nome, email, cpf, senha, dataNascimento } = req.body;

        if (!nome || !email || !cpf || !senha || !dataNascimento)
            return

        const obj =
        {
            Nome: nome,
            Email: email,
            Cpf: cpf,
            Senha: senha,
            DataNascimento: dataNascimento,
        }

        try {
            const p = await User.create(obj);
            return res.status(201).send({ message: "Pessoa inserida com sucesso", body: p })

        } catch (error) {
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
            await User.findByIdAndDelete(id);
            return res.status(200).send({ message: "Person deleted successfully" })
        } catch (error) {
            return res.status(500).send({ message: "Something failled" })
        }
    }

}

module.exports = UserController