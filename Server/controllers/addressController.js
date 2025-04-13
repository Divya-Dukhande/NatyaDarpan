const Address = require('../models/Address');

// ✅ Add a new address
exports.addAddress = async (req, res) => {
    try {
        const { userId, street, city, state, zip, country, phone, cart } = req.body;

        // Validate all required fields
        if (!userId || !street || !city || !state || !zip || !country || !phone) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        //Validate pincode
        const pinRegex = /^[0-9]{6}$/;
        if (!pinRegex.test(zip)) {
            return res.status(400).json({ error: 'Invalid pincode' });
        }

        //Validate phone number

        // Find the user's address data
        let userAddress = await Address.findOne({ userId });

        // If the user doesn't have any address data, create a new one
        if (!userAddress) {
            userAddress = new Address({ userId, addresses: [], selectedAddress: null, cart: [] });
        }

        // Check if the user already has an address
        if (userAddress.addresses.length > 0) {
            // Update the last address in the array with the new information
            const lastAddressIndex = userAddress.addresses.length - 1;
            userAddress.addresses[lastAddressIndex] = { street, city, state, zip, country, phone };
        } else {
            // If no address exists, add a new one
            const newAddress = { street, city, state, zip, country, phone };
            userAddress.addresses.push(newAddress);
        }

        // Optionally, update the cart if it's provided in the request
        if (cart) {
            userAddress.cart = cart;
        }

        // Save the updated userAddress document
        await userAddress.save();

        res.status(200).json({ message: 'Address updated successfully', userAddress });
    } catch (error) {
        res.status(500).json({ error: 'Error adding/updating address' });
    }
};



//  Get all addresses for a user
// Get all addresses for a user
exports.getAddresses = async (req, res) => {
    try {
        const { userId } = req.params;
        const userAddress = await Address.findOne({ userId });

        if (!userAddress) return res.status(404).json({ error: 'No addresses found' });

        res.json(userAddress);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching addresses' });
    }
};


//  Select an address
// Select an address
exports.selectAddress = async (req, res) => {
    try {
        const { userId, addressId } = req.body;
        const userAddress = await Address.findOne({ userId });

        if (!userAddress) return res.status(404).json({ error: 'User not found' });

        const selectedAddress = userAddress.addresses.find(addr => addr._id.toString() === addressId);
        if (!selectedAddress) return res.status(404).json({ error: 'Address not found' });

        userAddress.selectedAddress = selectedAddress;
        await userAddress.save();

        res.json({ message: 'Address selected successfully', userAddress });
    } catch (error) {
        res.status(500).json({ error: 'Error selecting address' });
    }
};


// Delete an address
// Delete an address
exports.deleteAddress = async (req, res) => {
    try {
        const { userId, addressId } = req.body;
        const userAddress = await Address.findOne({ userId });

        if (!userAddress) return res.status(404).json({ error: 'User not found' });

        userAddress.addresses = userAddress.addresses.filter(addr => addr._id.toString() !== addressId);

        if (userAddress.selectedAddress && userAddress.selectedAddress._id.toString() === addressId) {
            userAddress.selectedAddress = null;
        }

        await userAddress.save();

        res.json({ message: 'Address deleted successfully', userAddress });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting address' });
    }
};
