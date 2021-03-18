// Initializing dependencies (the one's which you will use)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // Creating Express App
const port = 5000; // port number on which server is listining on localhost

const Api = require("./api");

//// Middlewares
// to parse req.body to json data
app.use(express.json());
// for enabling Cross-Origin Resource Sharing
app.use(cors());

// Configuring Database Connection
// Here "shipment-portal" is the name of project database (you can change it to any name you like)
// Paste this address 👉 "mongodb://localhost/shipment-portal" in MongoDB Atlas to see Visual Representation
mongoose.connect("mongodb://localhost/shipment-portal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Checking Database Connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("MongoDB connected successfully");
});

//// Routes
app.get("/", (req, res) => {
  res.send("Hello from the Server!! ✌");
});
// Api routes
app.use("/api/shipment", Api);

//// Listener's
app.listen(port, () => {
  console.log(`Server is Listining On https://localhost:${port}`);
});
