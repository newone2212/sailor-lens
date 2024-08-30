const express = require('express');
const router = express.Router();

module.exports = {
    // Upload images
    imageUpload: async (req, res) => {
        const { file } = req.files;

        // Check if required fields are present
        if (!file) {
            return res.status(400).json({ error: "Missing required fields" });
        } else {
            const imageUrl = `/uploads/${file[0].filename}`;
            res.send({ imageUrl });
        }
    }
};