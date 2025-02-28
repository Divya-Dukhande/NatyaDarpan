const Product = require('../models/productModel');
// const cloudinary = require('../config/cloudinary');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imageFile = req.file.path;

    const uploadedImage = await cloudinary.uploader.upload(imageFile, {
      folder: 'products',
    });

    const product = new Product({
      name,
      price,
      description,
      image: uploadedImage.secure_url,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    await cloudinary.uploader.destroy(product.image);
    await product.remove();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
