const app = require('./app');
const connectDB = require('../Proyecto-Final-Backend/src/database/dbConnection');

const startServer = async () => {
  await connectDB();

  const port = process.env.PORT || 4003;
  app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
  });
};

startServer();
