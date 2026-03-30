const express = require("express");
const app = express();
app.use(express.json());
// Test route
app.get("/test", (req, res) => {
console.log("Root route hit");
res.send("API Running");
});
module.exports = app;