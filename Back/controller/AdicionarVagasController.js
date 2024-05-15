const { UserModel } = require("../model/UserModel");
const { AdicionarVagasModel } = require("../model/AdicionarVagasModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode');
require("dotenv").config();

function Decrypt(titulo) {
  var decrypted = CryptoJS.AES.decrypt(titulo, process.env.SECRET).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}

class AdicionarVagasController {
  static async Vagas(req, res) {
    const { token, titulo, descricao, dataInicio, dataTermino, 
          valor, quantidadedePessoas, isAnswer } = req.body;

    const decode = jwt_decode.jwtDecode(token);
    const user = await UserModel.findOne({ _id: decode.userid });

    const vagas = new AdicionarVagasModel({
      user: user,
      titulo: titulo,
      descricao: descricao,
      dataInicio: dataInicio,
      dataTermino: dataTermino,
      valor: valor,
      quantidadedePessoas: quantidadedePessoas,
      isAnswer: isAnswer,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      removedAt: null,
    });

    try {
      await AdicionarVagasModel.create(vagas);
      return res.status(200).send({ message: "Vaga adicionada com sucesso" });
    } catch (error) {
      return res.status(500).send({
        message: "Algo falhou ao tentar adicionar vaga",
        data: error.message,
      });
    }
  }

  static async GetAllVagas(req, res) {
    try {
      const vagasAdicionadas = await AdicionarVagasModel.find({ isAnswer : null });
      res.status(200).send({ vagasAdicionadas: vagasAdicionadas });
    } catch (error) {
      return res.status(500).send({
        message: "Algo falhou ao tentar obter todas as vagas",
        data: error.message,
      });
    }
  }

  static async GetVagasById(req, res) {
    const {id} = req.params

    try {
      const vagas = await AdicionarVagasModel.findById(id);
      res.status(200).send({ vagas: vagas });
    } catch (error) {
      return res.status(500).send({ message: "Algo falhou ao tentar obter a vaga",data: error.message });
    }
  }

  static async getVagasByUserId(req, res) {
    const userid = req.params.id;

    try {
      const user = await UserModel.findById(userid);
      const vagasAdicionadas = await AdicionarVagasModel.find({ user: user, isAnswer: {$exists: false} })
      return res.status(200).send({ vagasAdicionadas: vagasAdicionadas })
    } catch (error) {
      return res.status(500).send({ message: "Algo falhou ao tentar obter todas as vagas adicionadas",data: error.message });
    }
  }

  static async Delete(req, res) {
      var decrypted = Decrypt(req.body.jsonCrypt);
      const json = JSON.parse(decrypted);
      const { vagasid } = json;

      try {
          await AdicionarVagasModel.deleteOne({ _id: vagasid });
          res.status(200).send({ message: 'vaga deletada com sucesso' });
      } catch (error) {
          return res.status(500).send({ message: 'Algo falhou ao tentar excluir as vagas', data: error.message});
      }
  }
}

module.exports = AdicionarVagasController;
