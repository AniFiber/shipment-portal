const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

const Api = require("./api");

//Middlewares
app.use(express.json());
app.use(cors());

//
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("MongoDB connected successfully");
});

//Routes
app.get("/", (req, res) => {
  res.send("Hello from the Server!! ✌");
});
app.use("/api/shipment", Api);

// Listener's
app.listen(port, () => {
  console.log(`Server is Listining On ${port}`);
});
