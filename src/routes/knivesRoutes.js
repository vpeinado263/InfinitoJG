const express = require('express');
const { body } = require('express-validator');
const knivesControllers = require('../controllers/knivesControllers');
const errorHandler = require('../middlewares/errorHandler');
const checkID = require('../middlewares/checkID');
const { validateCreateKnife } = require('../validdation/validationsKnives');

const router = express.Router();

router.use(errorHandler);

router.put('/actualizar/:id',[checkID, validateCreateKnife], knivesControllers.updateKnifeByID);

router.post('/crear', validateCreateKnife, knivesControllers.createKnife);

router.get('/ver', knivesControllers.getKnives);

router.get('/ver/:id', [checkID], knivesControllers.getKnivesById);

router.get('/ver/codigo/:codigo', knivesControllers.getKnivesByCode);

router.delete('/borrar/:id', [checkID], knivesControllers.deleteKnifeByID);


module.exports = router;