const express = require("express");
const QueryModel = require("../models/QueryModel");

const router = express.Router();

// ✅ Get All Queries (Admin Side)
router.get("/", async (req, res) => {
    try {
        const queries = await QueryModel.find();
        res.status(200).json(queries);
    } catch (error) {
        console.error("Error fetching queries:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// ✅ Submit a Query (User Side)
router.post("/", async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ message: "Message is required" });
        }

        const newQuery = new QueryModel({ message });
        await newQuery.save();

        console.log("Query saved:", newQuery);
        res.status(201).json(newQuery); // ✅ Ensure correct format
    } catch (error) {
        console.error("Error submitting query:", error);
        res.status(500).json({ message: "Error submitting query", error: error.message });
    }
});

// ✅ Respond to a Query (Admin Side)
router.put("/:id", async (req, res) => {
    try {
        const { response } = req.body;
        if (!response) {
            return res.status(400).json({ message: "Response is required" });
        }

        const updatedQuery = await QueryModel.findByIdAndUpdate(
            req.params.id,
            { response },
            { new: true }
        );

        if (!updatedQuery) {
            return res.status(404).json({ message: "Query not found" });
        }

        res.status(200).json(updatedQuery);
    } catch (error) {
        console.error("Error responding to query:", error);
        res.status(500).json({ message: "Error responding to query", error: error.message });
    }
});

module.exports = router;
