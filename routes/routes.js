const express = require('express');
const router = express.Router();
let calcularCuil = require('/Users/jpcasa/Documents/Personales/DesarrolloWeb/JS101/cuil/controllers/calcular-cuil')

router.get('/', calcularCuil.respuestaInicial)
router.get('/calcular-cuil', calcularCuil.respuestaGenero)
router.get('/calcular-cuil/:sexo', calcularCuil.respuestaSinDni)
router.get('/calcular-cuil/:sexo/:dni', calcularCuil.calcular)



module.exports = router