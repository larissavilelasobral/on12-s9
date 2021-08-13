const express = require("express");
const app = express();

const index = require("./routes/index");
const contact = require("./routes/contatosRoutes.js");

app.use(express.json());

app.use("/", index);
app.use("/contatos", contact);

module.exports = app;