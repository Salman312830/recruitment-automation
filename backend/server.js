// backend/server.js

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Simple health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "recruitment-automation-api" });
});

// Placeholder endpoint for CV upload (to be implemented later)
app.post("/api/cv/upload", (req, res) => {
  // Later: receive file / text, parse, score, store...
  res.json({
    message: "CV upload endpoint is working (logic not implemented yet).",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Recruitment Automation API running on port ${PORT}`);
});
