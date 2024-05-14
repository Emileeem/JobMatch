import express from "express";
import endereco from "../controller/enderecoController.js";

const routes = express.Router();

routes.get("/endereco", endereco.findAll);
routes.post("/endereco/add", endereco.addAddress);

export { routes as default };