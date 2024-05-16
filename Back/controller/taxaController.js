const Taxa = require('../model/taxaModel');

class UserController {

    static async getAllUser(req, res) {
        try {
            const taxa = await Taxa.find();
            return res.status(200).send({ data: taxa });
        } catch (error) {
            return res.status(500).send({ error: error });
        }

    }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const taxa = await Taxa.findById(id);
            return res.status(200).json(taxa);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static async create(req, res) {
        const { titulo, descricao, cpf: dataTermino, senha, dataNascimento } = req.body;

        if (!titulo || !descricao || !dataTermino || !senha || !dataNascimento)
            return

        const obj =
        {
            Titulo: titulo,
            Descricao: descricao,
            DataInicio: Date.now(),
            DataTermino: dataTermino,
            Valor: dataNascimento,
            QtdTaxa: qtdTaxa,
        }

        try {
            const p = await Taxa.create(obj);
            return res.status(201).send({ message: "Taxa inserida com sucesso", body: p })

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
            await Taxa.findByIdAndDelete(id);
            return res.status(200).send({ message: "Person deleted successfully" })
        } catch (error) {
            return res.status(500).send({ message: "Something failled" })
        }
    }

}

module.exports = UserController