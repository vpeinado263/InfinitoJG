const express = require('express');
const app = express();
const logRequest = require('../Proyecto-Final-Backend/src/middlewares/logRequest');
const knivesRouter = require('../Proyecto-Final-Backend/src/routes/knivesRoutes');
const productsRouter = require('../Proyecto-Final-Backend/src/routes/productRoutes')


app.use(express.json());
app.use(logRequest);

app.use('/knives', knivesRouter);
app.use('/products', productsRouter)

app.use('/', (req, res) => {
  res.send('Bienvenidos a InfinitoJG!');
});

module.exports = app;
