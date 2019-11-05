const express = require('express');
const router = express.Router();
const tarefasController = require('../controller/tarefas-controller'); //importa o controller

router.get('/', tarefasController.getTarefas);
router.post('/', tarefasController.postTarefas);
router.get('/:idTarefa', tarefasController.getTarefa);
module.exports = router;
