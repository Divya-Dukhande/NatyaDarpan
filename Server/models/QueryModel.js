const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
    message: { type: String, required: true },
    response: { type: String, default: "" } // Default response empty hoga
}, { timestamps: true });

const QueryModel = mongoose.model("Query", QuerySchema);
module.exports = QueryModel;
