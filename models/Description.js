const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataDesc = new Schema ({
    address: String,
    attractions: String,
    contact_us: String,
    police: [String],
    hospital:[String],
    hotel: [String],
    restaurant: [String],
    worship: [String],
    jarak: [String]
})

const Description = mongoose.model("Description", dataDesc)

module.exports = Description