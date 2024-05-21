import taxaModel from '../model/taxaModel.js';
import userModel from '../model/userModel.js';
import enderecoModel from '../model/enderecoModel.js';

export default class TaxaController {

    static async getAllTaxa(req, res) {
        try {
            const taxa = await taxaModel.findAll();
            return res.status(200).send({ data: taxa });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getTaxaById(req, res) {
        const { id } = req.params;
        try {
            const taxa = await taxaModel.findByPk(id);
            return res.status(200).json(taxa);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static async create(req, res) {
        const { titulo, descricao, dataTermino, dataInicio, valor, qtdTaxa, IDEndereco, IDUsuario } = req.body;
        console.log(req.body)

        if (!titulo || !descricao || !dataTermino || !valor || !qtdTaxa)
            return res.status(400).send({message: "parametro vazio"})

        if (titulo.Lengh > 30 || descricao.Lengh > 255)
            return res.status(413).send({message: "Você ultrapassou o limite de caracter"})

        const endereco = await enderecoModel.findByPk(IDEndereco);
        if (!endereco) {
            return res.status(404).json({ error: 'Endereco not found' });
        }

        const usuario = await userModel.findByPk(IDUsuario);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário not found' });
        }
        
        try {
        const obj =
        {
            Titulo: titulo,
            Descricao: descricao,
            DataInicio: dataInicio,
            DataTermino: dataTermino,
            Valor: valor,
            QtdTaxa: qtdTaxa,
            IDEndereco: endereco.IDEndereco,
            IDUsuario: usuario.IDUsuario
        }
            const p = await taxaModel.create(obj);
            return res.status(201).send({ message: "Taxa inserida com sucesso", body: p })

        } catch (error) {
            return res.status(500).send({ error: error })
        }
    }

    static async update(req, res) {    
        const { titulo, descricao, dataTermino, dataInicio, valor, qtdTaxa, IDEndereco, IDUsuario } = req.body;
        console.log(req.body)

        const { id } = req.params;

        if (!titulo || !descricao || !dataInicio || !dataTermino || !valor || !qtdTaxa)
            return

        const endereco = await enderecoModel.findByPk(IDEndereco);
        if (!endereco) {
            return res.status(404).json({ error: 'Endereco não encontrado' });
        }

        const usuario = await userModel.findByPk(IDUsuario);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }

        if (!id)
            return res.status(400).send({ message: "id não providenciado" })
        const IDTaxa = id
        
        try {
            const p = await taxaModel.update(
                {
                    Titulo: titulo,
                    Descricao: descricao,
                    DataInicio: dataInicio,
                    DataTermino: dataTermino,
                    Valor: valor,
                    QtdTaxa: qtdTaxa,
                    IDEndereco: endereco.IDEndereco,
                    IDUsuario: usuario.IDUsuario
                },
                {
                    where: {
                        IDTaxa: IDTaxa
                    }
                }
            );
            return res.status(201).send({ message: "Taxa Atualizada com sucesso", body: p })
        
            } catch (error) {
                return res.status(500).send({ error: error })
            }
    }

    static async delete(req, res) {
        const { id } = req.params;
        const IDTaxa = id
        if (!id)
            return res.status(400).send({ message: "id não providenciado" });

        try {
            const p = await taxaModel.destroy({where: {IDTaxa}});
            return res.status(200).send({ message: "Taxa Deletada com sucesso", body: p })
        } catch (error) {
            return res.status(500).send({ message: error })

        }
    }

}