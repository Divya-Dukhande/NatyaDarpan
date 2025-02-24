const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/adminController');
const authenticate = require('../middlewares/authMiddleware');

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

module.exports = router;
