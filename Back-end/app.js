const express = require('express');
const app = express();
const logRequest = require('./middlewares/logRequest');
const knivesRouter = require('./routes/knivesRoutes');

app.use(express.json());
app.use(logRequest);
app.use('/', (req, res) => {
  res.send('Bienvenidos a Cuchilleria InfinitoJG!');
});
app.use('/knives', knivesRouter);

module.exports = app;
