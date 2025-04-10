const Query = require("../models/Query")

exports.submitQuery = async (req, res) => {
    try {
        const { message, username } = req.body;
        const query = await Query.create({ username, message });
        res.status(201).json(query);
    } catch (err) {
        res.status(500).json({ error: "Failed to submit query" });
    }
};

exports.getAllQueries = async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });
        res.json(queries);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch queries" });
    }
};
