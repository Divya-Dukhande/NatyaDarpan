const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

// Add an address
router.post("/add", addressController.addAddress);

// Get all addresses for a user
router.get("/:userId", addressController.getAddresses);

// Select an address
router.put("/select", addressController.selectAddress);

// Delete an address
router.delete("/delete", addressController.deleteAddress);

module.exports = router;
