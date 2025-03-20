const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: String,
            zip: String,
            isDefault: { type: Boolean, default: false },
        },
    ],
    cart: []
});

module.exports = mongoose.model("Address", addressSchema);
