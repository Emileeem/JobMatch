
// const express = require('express');
// const cors = require('cors');
import express from "express";
import cors from 'cors';

const app = express();

require('./startup/db')();

app.use(cors({
    origin: '*'
}));

require('./startup/routes')(app);

const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

// import express from "express";
// import routes from "./startup/routes.js";
// import db from "./startup/db.js";

// const app = express();

// app.use(express.json());
// app.use(routes);

// db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

// app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
// >>>>>>> origin/emyli
