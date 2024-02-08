const express = require('express');
const { body } = require('express-validator');
const knivesControllers = require('../controllers/knivesControllers');
const errorHandler = require('../middlewares/errorHandler');
const checkID = require('../middlewares/checkID');
const { validateCreateKnife } = require('../validdation/validations');


const router = express.Router();

const validateID = (req, res, next) => {
  const id = (req && req.params && req.params.id) || '';
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ msg: 'ID inválido' });
  }
  next();
};



router.put(
  '/actualizar/:id',
  [checkID, validateID], 
  [
    
    body('nombre').optional().isString(),
    body('precio').optional().isNumeric(),
    body('material').optional().isString(),
    body('descripcion').optional().isString(),
    body('disponible').optional().isBoolean(),
  ],
  knivesControllers.updateKnifeByID
);


router.delete('/borrar/:id', [checkID, validateID], knivesControllers.deleteKnifeByID);

router.get('/ver', knivesControllers.getKnives);

router.get('/ver/:id', validateID, knivesControllers.getKnivesById);

router.get('/ver/codigo/:codigo', knivesControllers.getKnivesByCode);

router.post('/crear', validateCreateKnife, knivesControllers.createKnife);


router.use(errorHandler);

module.exports = router;