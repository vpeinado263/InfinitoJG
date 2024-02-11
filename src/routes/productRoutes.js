const express = require('express');
const { body } = require('express-validator');
const productControllers = require('../controllers/productControllers');
const checkID = require('../middlewares/checkID');
const errorHandler = require('../middlewares/errorHandler');

const router = express.Router();

router.use(errorHandler);

router.put(
  '/actualizar/:id',
  [checkID],
  [
    body('title').optional().isString(),
    body('price').optional().isNumeric(),
    body('description').optional().isString(),
    body('categoryId').optional().isNumeric(),
    body('images').optional().isArray(),
  ],
  productControllers.updateProduct
);

router.post('/crear', productControllers.createProduct);

router.get('/ver', productControllers.getAllProducts);

router.get('/ver/:id',[checkID] , productControllers.getProductById);

router.delete('/borrar/:id', [checkID], productControllers.deleteProduct);

module.exports = router;
