const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
const errorResponse = {
    error: {
        message: '¡Vaya! Algo salio Mal',
        type: err.name || 'Error Desconocido',
        details: err.message || 'Dealles no disponobles',
    },
};
 res.status(500) .json(errorResponse);
};

module.exports = errorHandler;