const knifeModel = require('../models/knifeModel');
const { validationResult } = require('express-validator');

const createKnife = async (req, res) => {
  try {
    const newKnife = await knifeModel.create(req.body);
    res.status(201).json({ knife: newKnife, msg: "¡Cuchillo creado!" });
  } catch (error) {
    res.status(500).json({
      knife: null,
      error: {
        message: "Error al crear el cuchillo",
        details: error.message,
      },
    });
  }
};

const getKnives = async (req, res) => {
  try {
    const knives = await knifeModel.find();
    res.status(200).json({ knives, msg: "Todos los Cuchillos de InfinitoJG" });
  } catch (error) {
    res.status(500).json({
      knives: null,
      error: {
        message: "Error al obtener cuchillos",
        details: error.message,
      },
    });
  }
};

const updateKnivesById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id;
    const updatedKnife = await knifeModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedKnife) {
      return res.status(404).json({ error: 'Cuchillo no encontrado' });
    }

    res.status(200).json({ knife: updatedKnife, message: 'Cuchillo actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el cuchillo', details: error.message });
  }
};

const deleteKnivesById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedKnife = await knifeModel.findByIdAndDelete(id);

    if (!deletedKnife) {
      return res.status(404).json({ error: 'Cuchillo no encontrado' });
    }

    res.status(200).json({ knife: deletedKnife, message: 'Cuchillo borrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el cuchillo', details: error.message });
  }
};

const getKnifeById = async (req, res) => {
  try {
    const id = req.params.id;
    const knife = await knifeModel.findById(id);

    if (!knife) {
      return res.status(404).json({ error: 'Cuchillo no encontrado' });
    }

    res.status(200).json({ knife });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getKnivesByCode = async (req, res) => {
  try {
    const { codigo } = req.params;
    const knife = await knifeModel.findOne({ codigo });

    if (!knife) {
      return res.status(404).json({ error: 'Cuchillo no encontrado' });
    }

    res.status(200).json({ knife });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createKnife,
  getKnives,
  updateKnivesById,
  deleteKnivesById,
  getKnivesByCode,
  getKnifeById
};
