
const express = require('express');
const enrutador = express.Router();
const jugadorNivelControlador = require('../controladores/jugadorNivelControlador');

enrutador.post('/comprar',jugadorNivelControlador.registrarPuntaje);
enrutador.get('/obtener/:cedula',jugadorNivelControlador.obtenerPuntajePorUsuario);
module.exports = enrutador;