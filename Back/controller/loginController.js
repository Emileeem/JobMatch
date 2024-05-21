import userModel from '../model/userModel.js';

export default class  LoginController {

  static async login(req, res) {    
    // const { cpf, password } = json;
    const { cpf, password } = req.body;
    console.log(cpf)
    console.log(password)
    
    if (!cpf)
    return res.status(422).json({ message: "O cpf é obrigatório" });

    if (!password)
        return res.status(422).json({ message: "A senha é obrigatória" });

    const user = await userModel.findOne({ cpf: cpf });

    console.log(user)
    console.log(!user)

    if (!user)
        return res.status(422).json({ message: "Cpf e/ou senha inválido" });

    console.log(user.Senha != password)
    if (user.Senha != password)
      return res.status(422).send({ message: "Cpf e/ou senha inválido" });

    try {
      return res.status(200).send({ message: "usuário logado"  });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something failed", data: error.message });
    }
  }
}