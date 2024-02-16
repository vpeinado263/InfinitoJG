const express = require('express');
const session = require('express-session');
const app = express();
const errorHandler = require('./src/middlewares/errorHandler');
const logRequest = require('./src/middlewares/logRequest');
const routes = require('./src/routes/routes');  
const sessionConfig = require('./src/utils/sessionConfig');

app.use(express.json());
app.use(logRequest);
app.use(errorHandler);
app.use(session(sessionConfig));

app.use('/', routes);
app.use('/', (req, res) => {
  res.send('Bienvenidos a InfinitoJG!');
});

app.use((req, res) => {
  res.status(400).send('404 - Pagina no encontrada');
});

module.exports = app;



