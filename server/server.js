require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const User = require('./models/user'); // Check and adjust the path if needed

app.use(express.json());

// CONNECT MONGODB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("DB connection error:", err));

// Simple health check route
app.get("/", (req, res) => {
    res.send("Backend is running...");
});
mongoose.connect("mongodb://localhost:27017/SportsCheck")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log("DB Error:", err));
  app.use("/api", require("./models/user"));


app.listen(5000, () => {
    console.log("Server running on 5000");
});
