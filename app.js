const express = require('express');
const app = express();
const logRequest = require('../Proyecto-Final-Backend/src/middlewares/logRequest');
const knivesRouter = require('../Proyecto-Final-Backend/src/routes/knivesRoutes');
const productsRouter = require('../Proyecto-Final-Backend/src/routes/productRoutes')
const usersRoutes = require('../Proyecto-Final-Backend/src/routes/usersRoutes');


app.use(express.json());
app.use(logRequest);

app.use('/knives', knivesRouter);
app.use('/products', productsRouter)
app.use('/users', usersRoutes);

app.use('/', (req, res) => {
  res.send('Bienvenidos a InfinitoJG!');
});

module.exports = app;
