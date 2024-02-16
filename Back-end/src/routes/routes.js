const express = require('express');
const knivesRouter = require('./knivesRoutes');
const productsRouter = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');

const router = express.Router();

router.use('/knives', knivesRouter);
router.use('/products', productsRouter);
router.use('/users', usersRoutes);



module.exports = router;
