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

// Get queries & responses for a specific user
exports.getUserQueries = async (req, res) => {
    try {
        const { username } = req.body;
        const queries = await Query.find({ username }).sort({ createdAt: -1 });

        if (!queries || queries.length === 0) {
            return res.status(404).json({ message: "No queries found for this user." });
        }

        res.json(queries);
    } catch (err) {
        console.error("Error fetching user queries:", err);
        res.status(500).json({ error: "Failed to fetch user queries" });
    }
};
