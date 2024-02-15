const axios = require('axios');

// API de Platzi Fake Store

const createProduct = async (res) => {
  try {
    const response = await axios.post('https://api.escuelajs.co/api/v1/products');
    const newProducts = response.data;
    res.status(200).json({ products: newProducts, msg: '¡Producto Obtenido Correctamente.!' });
  } catch (error) {
    res.status(500).json({
      products: null,
      msg: "Error al Crear el Producto - " + error.message,
    });
  }
};

const getAllProducts = async (res) => {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    const products = response.data;
    res.status(200).json({ products, msg: "¡Todos los Productos de Platzi Fake Store API.!" });
  } catch (error) {
    res.status(500).json({
      products: null,
      msg: "Error al Obtener los Productos - " + error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    const product = response.data;
    res.status(200).json({ product, msg: '¡Producto Obtenido Correctamente.!' });
  } catch (error) {
    res.status(500).json({ product: null, msg: 'Error al Obtener el Producto - ' + error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, req.body);
    const updatedProduct = response.data;
    res.status(200).json({ product: updatedProduct, msg: '¡Producto Actualizado Correctamente.!' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al Actualizar el Producto - ' + error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
    const success = response.data;
    if (success) {
      res.status(200).json({ msg: '¡Producto Eliminado Correctamente.!' });
    } else {
      res.status(404).json({ msg: 'Producto no Encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Error al Eliminar el Producto - ' + error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
