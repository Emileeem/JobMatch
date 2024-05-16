import express from "express";
import endereco from "../controller/enderecoController.js";
import UserController from "../controller/userController.js"
const routes = express.Router();

// routes.get("/endereco", endereco.findAll);
// routes.post("/endereco/add", endereco.addAddress);

// Users
routes.post("/api/user", UserController.create)


export { routes as default };