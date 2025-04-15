const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    response: { type: String, default: "" },
}, {
    timestamps: true // 👈 This adds createdAt and updatedAt automatically
});

module.exports = mongoose.model("Query", querySchema);
