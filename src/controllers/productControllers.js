const axios = require('axios');


const createProduct = async (req, res) => {
  try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/products');
      const newProducts = response.data;
      res.status(201).json({ products: newProducts, msg: 'Producto obtenido correctamente.'});
  } catch (error) {
      res.status(500).json({
          products: null,
          msg: "Error al crear el producto - " + error.message,
      });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const reesponse = await axio.get('https://api.escuelajs.co/api/v1/products');
    const products = response.data;
    res.status(200).json({ products, msg: "Todos los productos de Platzi Fake Store API." });
  } catch (error) {
    res.status(500).json({ 
        products: null,
        msg: "Error al obtener los productos - " + error.message, 
    });
  }
};

const getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      const product = response.data;
      res.status(200).json({ product, msg: 'Producto obtenido correctamente.' });
    } catch (error) {
      res.status(500).json({ product: null, msg: 'Error al obtener el producto - ' + error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, req.body);
      const updatedProduct = response.data;
      res.status(200).json({ product: updatedProduct, msg: 'Producto actualizado correctamente.' });
    } catch (error) {
      res.status(500).json({ msg: 'Error al actualizar el producto - ' + error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
      const success = response.data;
      if (success) {
        res.status(200).json({ msg: 'Producto eliminado correctamente.' });
      } else {
        res.status(404).json({ msg: 'Producto no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ msg: 'Error al eliminar el producto - ' + error.message });
    }
};
  
module.exports = { 
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
