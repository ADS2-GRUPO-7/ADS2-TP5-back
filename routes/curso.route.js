//defino controlador para el manejo de CRUD
const cursoCtrl = require('./../controllers/curso.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', cursoCtrl.getAllCurso);
router.post('/', cursoCtrl.createCurso);
router.get('/:id', cursoCtrl.getCurso);
router.put('/:id', cursoCtrl.editCurso);
router.delete('/:id', cursoCtrl.deleteCurso);
//exportamos el modulo de rutas
module.exports = router;