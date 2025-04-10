const express = require("express");
const router = express.Router();
const Query = require("../models/Query");

// POST: User sends a query
router.post("/add", async (req, res) => {
    try {
        const { username, message } = req.body;
        const newQuery = new Query({ username, message });
        await newQuery.save();
        res.status(201).json({ message: "Query sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send query" });
    }
});

// GET: Admin fetches all queries
router.get("/get", async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });
        res.json(queries);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch queries" });
    }
});

// PUT: Admin responds to a query
router.put("/:id/respond", async (req, res) => {
    try {
        const { response } = req.body;
        const query = await Query.findByIdAndUpdate(
            req.params.id,
            { response },
            { new: true }
        );
        res.json(query);
    } catch (error) {
        res.status(500).json({ message: "Failed to respond to query" });
    }
});

module.exports = router;
