const express = require('express');
const knivesControllers = require('../controllers/knivesControllers');
const errorHandler = require('../middlewares/errorHandler');
const checkID = require('../middlewares/checkID');
const { validateCreateKnife } = require('../validdation/validationsKnives');

const router = express.Router();

router.use((err, req, res, next) => {
    if (err) {
        return errorHandler(err, req, res, next);
    }
    next();
});

router.put('/actualizar/:id',[checkID, validateCreateKnife], knivesControllers.updateKnifeByID);
router.post('/crear', validateCreateKnife, knivesControllers.createKnife);
router.get('/ver', knivesControllers.getKnives);
router.get('/ver/:id', [checkID], knivesControllers.getKnivesById);
router.get('/ver/codigo/:codigo', knivesControllers.getKnivesByCode);
router.delete('/borrar/:id', [checkID], knivesControllers.deleteKnifeByID);


module.exports = router;