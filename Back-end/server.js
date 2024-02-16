const app = require('./app');
const connectDB = require('./src/database/dbConnection');

const startServer = async () => {
  try {
    await connectDB();

    const port = process.env.PORT || 4003;
    const server = app.listen(port, () => {
      console.log(`Servidor funcionando en http://localhost:${port}`);
    });

    // Manejar eventos de cierre para que Nodemon pueda reiniciar correctamente
    process.on('SIGINT', () => {
      console.log('Cerrando el servidor...');
      server.close(() => {
        console.log('Servidor cerrado correctamente');
        process.exit(0);
      });
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error.message);
  }
};

startServer();

