require("dotenv").config();
const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = process.env.DATA_FILE || "data.json";
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Helper function to read JSON file
const readData = () => {
    try {
        const data = fs.readFileSync(DATA_FILE);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Helper function to write JSON file
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Read all records (GET /items)
app.get("/items", (req, res) => {
    const items = readData();
    res.json(items);
});

// Create a new record (POST /items)
app.post("/items", (req, res) => {
    const items = readData();
    const newItem = { id: Date.now(), ...req.body };
    items.push(newItem);
    writeData(items);
    res.status(201).json(newItem);
});

// Update a record (PUT /items/:id)
app.put("/items/:id", (req, res) => {
    let items = readData();
    const { id } = req.params;
    const index = items.findIndex((item) => item.id == id);
    
    if (index !== -1) {
        items[index] = { ...items[index], ...req.body };
        writeData(items);
        res.json(items[index]);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

// Delete a record (DELETE /items/:id)
app.delete("/items/:id", (req, res) => {
    let items = readData();
    const { id } = req.params;
    const filteredItems = items.filter((item) => item.id != id);
    
    if (items.length === filteredItems.length) {
        return res.status(404).json({ message: "Item not found" });
    }
    
    writeData(filteredItems);
    res.json({ message: "Item deleted" });
});

// Serve frontend
app.use(express.static("public"));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on ${BASE_URL}`);
});
