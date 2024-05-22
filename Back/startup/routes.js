import express from "express";
import UserController from "../controller/userController.js"
import TaxaController from "../controller/taxaController.js"
import LoginController from "../controller/loginController.js"
const routes = express.Router();

// Users
routes.get("/api/user/", UserController.getAllUser)
routes.get("/api/user/:id", UserController.getUserById)
routes.post("/api/user/", UserController.create)
routes.delete("/api/user/:id", UserController.delete)
routes.put("/api/user/:id", UserController.updateUsuario)

//Login 
routes.post('/api/login', LoginController.login)

// Endereco
routes.get("/api/enderecouser/:id", UserController.getUserEnderecoById)
routes.put("/api/enderecouser/:id", UserController.updateUsuarioEndereco)
routes.put("/api/user/endereco/:id", UserController.updateEndereco)

// Taxas
routes.get("/api/taxa/", TaxaController.getAllTaxa)
routes.get("/api/taxa/status1", TaxaController.getAllStatus1)
routes.get("/api/taxa/status2", TaxaController.getAllStatus2)
routes.get("/api/taxa/status3", TaxaController.getAllStatus3)
routes.get("/api/taxa/:id", TaxaController.getTaxaById)
routes.post("/api/taxa/", TaxaController.create)
routes.delete("/api/taxa/:id", TaxaController.delete)
routes.put("/api/taxa/:id", TaxaController.update)
routes.put("/api/taxa/status/:id", TaxaController.updateStatus)

export { routes as default };