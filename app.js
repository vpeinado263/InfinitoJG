const express = require('express');
const session = require('express-session');
const app = express();
const errorHandler = require('./src/middlewares/errorHandler');
const logRequest = require('./src/middlewares/logRequest');
const knivesRouter = require('./src/routes/knivesRoutes');
const productsRouter = require('./src/routes/productRoutes');
const usersRoutes = require('./src/routes/usersRoutes');
const sessionConfig = require('./src/utilis/sessionConfig');

app.use(express.json());

app.use(logRequest);
app.use(errorHandler);
app.use(session(sessionConfig));


app.use('/knives', knivesRouter);
app.use('/products', productsRouter)
app.use('/users', usersRoutes);

app.use('/', (req, res) => {
  res.send('Bienvenidos a InfinitoJG!');
});

module.exports = app;
