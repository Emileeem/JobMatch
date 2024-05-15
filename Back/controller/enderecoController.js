const Endereco = require('../model/enderecoModel');

class EnderecoController {

    static async getAllUser(req, res) {
        try {
            const endereco = await Endereco.find();
            return res.status(200).send({ data: endereco });
        } catch (error) {
            return res.status(500).send({ error: error });
        }

    }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const endereco = await Endereco.findById(id);
            return res.status(200).json(endereco);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static async create(req, res) {
        const { pais, uf, municipio, cep, bairro, logradouro, complemento } = req.body;

        console.log({
          Pais: pais,
          Uf: uf,
          Municipio: municipio,
          Cep: cep,
          Bairro: bairro,
          Logradouro: logradouro,
          Complemento: complemento
        })

        if (!titulo || !descricao || !dataTermino || !senha || !dataNascimento)
            return

        const obj =
        {
            Pais: pais,
            Uf: uf,
            Municipio: municipio,
            Cep: cep,
            Bairro: bairro,
            Logradouro: logradouro,
            Complemento: complemento
        }

        try {
            const p = await Endereco.create(obj);
            return res.status(201).send({ message: "Endereco inserida com sucesso", body: p })

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
            await Endereco.findByIdAndDelete(id);
            return res.status(200).send({ message: "Person deleted successfully" })
        } catch (error) {
            return res.status(500).send({ message: "Something failled" })
        }
    }

}

module.exports = EnderecoController;

// import EnderecoModel from "../model/enderecoModel.js";
// const EnderecoModel = require("../model/enderecoModel.js");

// function findAll(req, res) {
//   EnderecoModel.findAll().then((result) => res.json(result));
// }

// function findAddress(req, res) {
//   EnderecoModel.findByPk(req.params.id).then((result) => res.json(result));
// }

// function addAddress(req, res) {
//   EnderecoModel.create({
//     Pais: req.body.Pais,
//     UF: req.body.UF,
//     Municipio: req.body.Municipio,
//     Cep: req.body.Cep,
//     Bairro: req.body.Bairro,
//     Logradouro: req.body.Logradouro,
//     Complemento: req.body.Complemento
//   }).then((result) => res.json(result));

// }

// async function updateClient(req, res) {
//   await EnderecoModel.update(
//     {
//       Pais: req.body.Pais,
//       UF: req.body.UF,
//       Municipio: req.body.Municipio,
//       Cep: req.body.Cep,
//       Bairro: req.body.Bairro,
//       Logradouro: req.body.Logradouro,
//       Complemento: req.body.Complemento
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   );

//   EnderecoModel.findByPk(req.params.id).then((result) => res.json(result));
// }

// async function deleteClient(req, res) {
//   await EnderecoModel.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });

//   EnderecoModel.findAll().then((result) => res.json(result));
// }




// export default { findAll, addAddress};