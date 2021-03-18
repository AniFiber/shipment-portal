const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Here we are defining the things/schema which we to store in database
const shipmentSchema = new Schema({
  blnumber: String,
  status: String,
});

// which is named "Shipment" for this collection of data
const shipment = mongoose.model("Shipment", shipmentSchema);

// Exporting it to use in other files (i.e. api.js/routes.js/controllers.js)
module.exports = shipment;
