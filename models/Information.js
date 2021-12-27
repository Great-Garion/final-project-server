const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataInformasi = new Schema({
    police: String,
    hospital:String,
    hotel: String,
    restaurant: String,
    worship: String
})

const Informasi = mongoose.model("Informasi", dataInformasi)

module.exports = Informasi