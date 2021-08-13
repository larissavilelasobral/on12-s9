const express = require("express");
const router = express.Router();
const controller = require("../controllers/contatoControllers");

router.get("/", controller.getAll)
router.get("/nomes", controller.getByName)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.newContato)

router.delete("/:id", controller.deletarContato)

module.exports = router;