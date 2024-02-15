const loginValidate = (req, res, next) => {
    if(!req.body.password || !req.body.username) {
        req.status(400).json({msg: 'Falta nombre de usuario y/o password.'})
    } else {
        next();
    }
}

module.exports = loginValidate;