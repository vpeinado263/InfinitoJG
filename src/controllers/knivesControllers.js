const knifeModel = require('../models/knifeModel');
const { validationResult } = require('express-validator');

//crear cuchillos
const createKnife = async (req, res) => {
  try {
      const newKnife = await knifeModel.create(req.body);
      res.status(201).json({ knife: newKnife, msg: "Cuchillo creado" });
  } catch (error) {
      res.status(500).json({
          knife: null,
          msg: "Error al crear el cuchillo - " + error.message,
      });
  }
};

//ver todos los cuchillos creados
const getKnives = async (req, res) => {
  try {
    const knives = await knifeModel.find();
    res.status(200).json({ knives, msg: "Todos los cuchillos de InfinitoJG" });
  } catch (error) {
    res.status(500).json({ 
        knives: null,
        msg: "Error al obtener cuchillos - " + error.message, 
    });
  }
};

//obtenr segun ID
const getKnivesById = async (req, res) => {
  try {
      const knife = await knifeModel.findById(req.params.id);
      res.status(200).json({ knife, msg: "ok" });
  } catch (error) {
      res.status(500).json({
          knife: null,
          msg: "Error al obtener cuchillo - " + error.message,
      });
  }
};


//obtenr segun CODIGO
const getKnivesByCode = async (req, res) => {
  try {
      const knife = await knifeModel.findOne({ codigo: req.params.codigo });
      if (!knife) {
          return res.status(404).json({ msg: 'Cuchillo no encontrado' });
      }
      res.status(200).json({ knife, msg: 'ok' });
  } catch (error) {
      res.status(500).json({
          knife: null,
          msg: 'Error al obtener cuchillo - ' + error.message,
      });
  }
};

// actualizar un cuchillo por su ID
const updateKnifeByID = async (req, res) => {
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
        return res.status(404).json({ msg: 'Cuchillo no encontrado' });
      }
  
      res.status(200).json({ knife: updatedKnife, msg: 'Cuchillo actualizado correctamente' });
    } catch (error) {
      res.status(500).json({ msg: 'Error al actualizar el cuchillo - ' + error.message });
    }
  };
  
  //borrar un cuchillo por su ID
  const deleteKnifeByID = async (req, res) => {
    try {
      const id = req.params.id;
      const deletedKnife = await knifeModel.findByIdAndDelete(id);
  
      if (!deletedKnife) {
        return res.status(404).json({ msg: 'Cuchillo no encontrado' });
      }
  
      res.status(200).json({ knife: deletedKnife, msg: 'Cuchillo borrado correctamente' });
    } catch (error) {
      res.status(500).json({ msg: 'Error al borrar el cuchillo - ' + error.message });
    }
  };
  
module.exports = { 
    getKnives, 
    getKnivesById, 
    getKnivesByCode, 
    createKnife, 
    updateKnifeByID,
    deleteKnifeByID 
};
