const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send({
        "titulo": "Contatos projeto-api-Reprograma",
        "version": "1.0.0",
        "mensagem": "Bem vinda a API de contatos"
    })
});

module.exports = router;