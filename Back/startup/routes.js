import express from "express";
import UserController from "../controller/userController.js"
import TaxaController from "../controller/taxaController.js"
import LoginController from "../controller/loginController.js"
const routes = express.Router();

// Users
routes.get("/api/taxa/:id", UserController.getUserById)
routes.post("/api/user/", UserController.create)

//Login 
.post('/api/login', LoginController.login)

// routes.delete("/api/user/:id", UserController.delete)
routes.put("/api/user/:id", UserController.update)

// Taxas
routes.get("/api/taxa/:id", TaxaController.getTaxaById)
routes.post("/api/taxa/", TaxaController.create)
routes.delete("/api/taxa/:id", TaxaController.delete)
routes.put("/api/taxa/:id", TaxaController.update)

export { routes as default };