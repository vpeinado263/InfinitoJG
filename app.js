const express = require('express');
const app = express();
const logRequest = require('../Proyecto-Final-Backend/src/middlewares/logRequest');
const knivesRouter = require('../Proyecto-Final-Backend/src/routes/knivesRoutes');

app.use(express.json());
app.use(logRequest);
app.use('/knives', knivesRouter);
app.use('/', (req, res) => {
  res.send('Bienvenidos Cuchilleria InfinitoJG!');
});

module.exports = app;
