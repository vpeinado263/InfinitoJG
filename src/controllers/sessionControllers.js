const count = (req, res) => {
    req.session.count = req.session.count ? req.session.count + 1 : 1;
    res.status(200)(`<h4>Visitaste la Pagina ${req.session.count} veces.</h4>`)
};

const login = (req, res) => {
    req.session.user = {id: 1122, username: 'admin'}
    res.status(200).send('<h4>Inicio de sesion Correcta!</h4>');
};

const getSessionProfile = (req, res) => {
    if (req.session.user) {
        res.status(200).send(`<h4>Perfil de ${req.session.user.username}.</h4>`)
    } else {
        res.status(200).send(`<h4>No hay Usuario logueado.</h4>`)
    }
};

const logout = (req, res) => {
    req.session.destroy();
    res.send("Session Finalizada");
};

module.exports = {login, logout, getSessionProfile, count};