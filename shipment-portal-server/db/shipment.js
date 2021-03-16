const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shipmentSchema = new Schema({
  blnumber: String,
  status: String,
});

const shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = shipment;
