const express = require('express');
const router = express.Router();
const survivorsController = require('../controllers/survivors.controller');


router.post('/', survivorsController.criar)

router.get('/', survivorsController.encontrarTodos)

router.get('/:id', survivorsController.encontrarPorId)

router.put('/location/:id', survivorsController.atualizarLocal)

router.put('/infected/:id', survivorsController.atualizarInfectados)

router.delete('/:id', survivorsController.deletar)

module.exports = router;