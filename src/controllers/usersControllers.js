const axios = require('axios');

// API de Platzi Fake Store

const createUser = async (req, res) => {
    try {
        const response = await axios.post('https://api.escuelajs.co/api/v1/users', req.body);
        const newUser = response.data;
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const response = await axios.get('http://api.escuelajs.co/api/v1/users');
        const users = response.data;
        res.status(200).json(users);
    } catch (error) {
        req.status(500).json({ error: error.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.put(`https://api.escuelajs.co/api/v1/users/${id}`, req.body);
        const updatedUser = response.data;
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const checkEmailAvailability = async (req, res) => {
    try {
        const response = await axios.post('https://api.escuelajs.co/api/v1/users/is-available', req.body);
        const { isAvailable } = response.data;
        res.status(200).json({ isAvailable });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`);
        const user = response.data;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.delete(`https://api.escuelajs.co/api/v1/users/${id}`);
      const success = response.data;
      if (success) {
        res.status(200).json({ msg: '¡Usuario Eliminado.!' });
      } else {
        res.status(404).json({ msg: 'Usuario no Encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ msg: 'Error al Eliminar al Usuario - ' + error.message });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    checkEmailAvailability,
    getSingleUser,
    deleteUser,
}
