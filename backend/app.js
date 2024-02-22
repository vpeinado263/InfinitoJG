require('dotenv').config();
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const session = require('express-session');
const errorHandler = require('./src/middlewares/errorHandler');
const logRequest = require('./src/middlewares/logRequest');
const knivesRouter = require('./src/routes/knivesRoutes');
const productsRouter = require('./src/routes/productsRoutes');
const sessionRoutes = require('./src/routes/sessionRoutes');
const usersRoutes = require('./src/routes/usersRoutes');
const sessionConfig = require('./src/utils/sessionConfig');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.use(logRequest);
app.use(errorHandler);
app.use(session(sessionConfig));


app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use('/knives', knivesRouter);
app.use('/products', productsRouter)
app.use('/users', usersRoutes);
app.use('/session', sessionRoutes);


app.use('/', (req, res) => {
  res.send('Bienvenidos a InfinitoJG!');
});


app.use((req, res, next) => {
  if (req.url === '/favicon.ico') {
    return res.status(204).end();  
  }
  next();
});

app.use((req, res) => {
  res.status(404).send('404 - Pagina no encontrada');
});

module.exports = app;




