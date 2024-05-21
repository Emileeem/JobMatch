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
routes.put("/api/user/endereco/:id", UserController.updateEndereco)

// Taxas
routes.get("/api/taxa/", TaxaController.getAllTaxa)
routes.get("/api/taxa/:id", TaxaController.getTaxaById)
routes.post("/api/createtaxa/", TaxaController.create)
routes.delete("/api/taxa/:id", TaxaController.delete)
routes.put("/api/taxa/:id", TaxaController.update)

export { routes as default };