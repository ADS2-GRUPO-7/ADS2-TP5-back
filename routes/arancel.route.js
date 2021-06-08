//defino controlador para el manejo de CRUD
const arancelCtrl = require('./../controllers/arancel.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', arancelCtrl.getAllArancel);
router.post('/', arancelCtrl.createArancel);
router.get('/:id', arancelCtrl.getArancel);
router.put('/:id', arancelCtrl.editArancel);
router.delete('/:id', arancelCtrl.deleteArancel);
/* router.get('/completo/', arancelCtrl.getArancelesCompleto); */
//exportamos el modulo de rutas
module.exports = router;