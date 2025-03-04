const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/adminController');
const { createProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productController');

const authenticate = require('../middlewares/authMiddleware');


{/*User Routes*/ }
// Create a new user
router.post('/users', authenticate, createUser);

// Get all users
router.get('/users', authenticate, getUsers);

// Get a single user by ID
router.get('/users/:id', authenticate, getUserById);

// Update a user by ID
router.put('/users/:id', authenticate, updateUser);

// Delete a user by ID
router.delete('/users/:id', authenticate, deleteUser);



{/*Product Routes*/ }
//Add a new Product
router.post('/products', authenticate, createProduct);

//Get all products
router.get('/products', authenticate, getProducts);

//Delete a product by Id
router.delete('/products/:id', authenticate, deleteProduct);


router.put('/products/:id', authenticate, updateProduct);


module.exports = router;



// const express = require('express');
// const router = express.Router();
// const { 
//     createUser, getUsers, getUserById, updateUser, deleteUser 
// } = require('../controllers/adminController');

// const { 
//     createProduct, getProducts, deleteProduct 
// } = require('../controllers/productController');

// const authenticate = require('../middlewares/authMiddleware'); 

// // ✅ Admin User Routes
// router.post('/users', authenticate, createUser);
// router.get('/users', authenticate, getUsers);
// router.get('/users/:id', authenticate, getUserById);
// router.put('/users/:id', authenticate, updateUser);
// router.delete('/users/:id', authenticate, deleteUser);

// // ✅ Product Management Routes (Admin Only)
// router.post('/create-product', authenticate, createProduct);
// router.get('/products', authenticate, getProducts);
// router.delete('/delete-product/:id', authenticate, deleteProduct);

// module.exports = router;