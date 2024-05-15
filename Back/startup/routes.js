import express from "express";
import * as user from "../controller/userController.js"

const routes = express.Router();

routes.post("/api/user", user.create());

export { routes as default };