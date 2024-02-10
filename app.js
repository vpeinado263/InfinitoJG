const express = require('express');
const app = express();
const logRequest = require('../Proyecto-Final-Backend/src/middlewares/logRequest');
const knivesRouter = require('../Proyecto-Final-Backend/src/routes/knivesRoutes');
const productControllers = require('../Proyecto-Final-Backend/src/controllers/productControllers');


app.use(express.json());
app.use(logRequest);

app.use('/knives', knivesRouter);

app.use('/products', productControllers.getAllProducts);
app.get('/products/:id', productControllers.getProductById);
app.post('/products', productControllers.createProduct);
app.put('/products/:id', productControllers.updateProduct);
app.delete('/products/:id', productControllers.deleteProduct);

app.use('/', (req, res) => {
  res.send('Bienvenidos a InfinitoJG!');
});



module.exports = app;
