const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.SECRET_KEY, { expiresIn: '1h' });

    req.session.user = { id: user.id, username: user.username, token };

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error en el controlador de inicio de sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const count = (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).send(`<h4>Visitaste la Página ${req.session.count} veces.</h4>`);
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

module.exports = {
  login,
  logout,
  getSessionProfile,
  count
};

