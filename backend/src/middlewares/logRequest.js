const logRequest = (req, res, next) => {
    console.log(`[${new Date(). toLocaleString()}] -Solicitud recibida ${req.method} ${req.url}`);
    next();
};

module.exports = logRequest;