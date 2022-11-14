const express = require('express');
const router  = express.Router();

const CarroController = require('./controllers/CarroController')

router.get('/carros',CarroController.getall);
router.get('/carros/:id',CarroController.getById);

module.exports = router;