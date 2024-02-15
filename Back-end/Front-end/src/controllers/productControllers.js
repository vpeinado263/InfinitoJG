const axios = require('axios');

// API de Platzi Fake Store

const createProduct = async (res) => {
  try {
    const response = await axios.post('https://api.escuelajs.co/api/v1/products');
    const newProducts = response.data;
    res.status(200).json({ products: newProducts});
  } catch (error) {
    res.status(500).json({
      products: null, error: error.message });
  }
};

const getAllProducts = async (res) => {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    const products = response.data;
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({
      products: null, error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    const product = response.data;
    res.status(200).json({ product, msg: '¡Producto Obtenido Correctamente.!' });
  } catch (error) {
    res.status(500).json({ product: null, error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, req.body);
    const updatedProduct = response.data;
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
    const success = response.data;
    if (success) {
      res.status(200).json({ sucess: true});
    } else {
      res.status(404).json({ success: false, error: 'Proucto no encontrado'});
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
