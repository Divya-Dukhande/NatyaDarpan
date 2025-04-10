const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    response: { type: String, default: "" },
});

module.exports = mongoose.model("Query", querySchema);
