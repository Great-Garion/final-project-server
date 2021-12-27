const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataTransport = new Schema({
  name: String,
  price: Number,
  contact: String,
});

const transport = mongoose.model("transport", dataTransport);

module.exports = transport;
