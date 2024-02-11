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

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    checkEmailAvailability,
    getSingleUser,
}
