const express = require('express');
const routes = require('./startup/routes.js');
const db = require('./startup/db.js');

require('dotenv').config()

const app = express();

// console.log(app + "1")

app.use(express.json());
app.use(router(app));

// console.log(app + "2")

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));