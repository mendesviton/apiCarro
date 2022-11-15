const express = require('express');
const router  = express.Router();

const CarroController = require('./controllers/CarroController')

router.get('/carros',CarroController.getall);
router.get('/carros/:id',CarroController.getById);
router.post('/carros',CarroController.insert);
router.put('/carro/:id',CarroController.update);
router.delete('/carro/:id',CarroController.delete)
module.exports = router;