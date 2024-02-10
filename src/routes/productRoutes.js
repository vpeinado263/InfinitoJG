const express = require('express');
const { body } = require('express-validator');
const productControllers = require('../controllers/productControllers');
const checkID = require('../middlewares/checkID');
const { validateCreateProduct } = require('../validation/validations');

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
    body('title').optional().isString(),
    body('price').optional().isNumeric(),
    body('description').optional().isString(),
    body('categoryId').optional().isNumeric(),
    body('images').optional().isArray(),
  ],
  productControllers.updateProduct
);

router.post('/crear', validateCreateProduct, productControllers.createProduct);

router.get('/ver', productControllers.getAllProducts);

router.get('/ver/:id', validateID, productControllers.getProductById);

router.delete('/borrar/:id', [checkID, validateID], productControllers.deleteProduct);

module.exports = router;
