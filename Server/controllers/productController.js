const Product = require('../models/Product');
const User = require('../models/User');
// const cloudinary = require('../config/cloudinary');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const userId = req.user;  // DECODED userId WHICH IS PASSED FROM AUTHENTICATE MIDDLEWARE
    const authuser = await User.findById(userId);  // FIND EVERYTHING RELATED TO USER
    if (!authuser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const { name, price, description, image } = req.body;

    const product = new Product({
      name,
      price,
      description,
      image,
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
    const userId = req.user;  // DECODED userId WHICH IS PASSED FROM AUTHENTICATE MIDDLEWARE
    const authuser = await User.findById(userId);  // FIND EVERYTHING RELATED TO USER
    if (!authuser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const userId = req.user;  // DECODED userId WHICH IS PASSED FROM AUTHENTICATE MIDDLEWARE
    const authuser = await User.findById(userId);  // FIND EVERYTHING RELATED TO USER
    if (!authuser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const userId = req.user;  // DECODED userId WHICH IS PASSED FROM AUTHENTICATE MIDDLEWARE
    const authuser = await User.findById(userId);  // FIND EVERYTHING RELATED TO USER
    if (!authuser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Find product by ID
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the product fields with the values from the request body
    const { name, price, description, image } = req.body;

    // Only update the fields that were provided
    if (name) product.name = name;
    if (price) product.price = price;
    if (description) product.description = description;
    if (image) product.image = image;

    // Save the updated product
    await product.save();
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};