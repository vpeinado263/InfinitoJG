const express = require('express');
const productControllers = require('../controllers/productControllers');
const checkID = require('../middlewares/checkID');
const errorHandler = require('../middlewares/errorHandler');
const { validateCreateProduct } = require('../validation/validationsProducts');


const router = express.Router();


router.put('/actualizar/:id', [checkID, validateCreateProduct], productControllers.updateProduct);
router.post('/crear', productControllers.createProduct);
router.get('/ver', productControllers.getAllProducts);
router.get('/ver/:id',[checkID] , productControllers.getProductById);
router.delete('/borrar/:id', [checkID], productControllers.deleteProduct);

router.use(errorHandler);

module.exports = router;
