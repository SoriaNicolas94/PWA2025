const express = require ('express');
const router = express.Router();
const { saludo } = require ('../controllers/saludoController');

router.get('/saludo', saludo);

module.exports = router;