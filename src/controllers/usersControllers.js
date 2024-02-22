const User = require('../models/userModel');

const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'El nombre de usuario ya está en uso' });
    }

    const newUser = new User({
      username,
      password,
      email,
    });

    await newUser.save();

    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error('Error en el controlador de creación de usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const checkEmailAvailability = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    const isAvailable = !existingUser;
    res.status(200).json({ isAvailable });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(200).json({ msg: '¡Usuario Eliminado!' });
    } else {
      res.status(404).json({ msg: 'Usuario no Encontrado.' });
    }
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
  deleteUser,
};
