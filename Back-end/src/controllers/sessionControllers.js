const count = (req, res) => {
    req.session.count = req.session.count ? req.session.count + 1 : 1;
    res.status(200).send(`<h4>Visitaste la Página ${req.session.count} veces.</h4>`);
};

const login = (req, res) => {
    req.session.user = { id: 1122, username: 'admin' };
    res.status(200).send('<h4>Inicio de sesión correcto!</h4>');
};

const getSessionProfile = (req, res) => {
    const { user } = req.session;
    const message = user ? `<h4>Perfil de ${user.username}.</h4>` : '<h4>No hay usuario logueado.</h4>';
    res.status(200).send(message);
};

const logout = (req, res) => {
    req.session.destroy();
    res.status(200).send("Sesión finalizada");
};

module.exports = { login, logout, getSessionProfile, count };
