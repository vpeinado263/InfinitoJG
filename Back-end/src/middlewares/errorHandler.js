const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || '¡Vaya! Algo salió mal';

    res.status(statusCode).json({ error: errorMessage });
};

module.exports = errorHandler;
