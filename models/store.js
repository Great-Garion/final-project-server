const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataStore = new Schema({
  name: String,
  imgProduct: String,
  productDescription: String,
  contactStore: String,
});

const store = mongoose.model("store", dataStore);

module.exports = store;
