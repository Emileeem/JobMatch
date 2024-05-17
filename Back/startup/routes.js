import express from "express";
import UserController from "../controller/userController.js"
import TaxaController from "../controller/taxaController.js"
const routes = express.Router();

// Users
routes.post("/api/user", UserController.create)

// Taxas
routes.get("/api/taxa/:id", TaxaController.getTaxaById)
routes.post("/api/taxa/", TaxaController.create)
routes.delete("/api/taxa/:id", TaxaController.delete)

export { routes as default };