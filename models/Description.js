const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataDesc = new Schema ({
    address: String,
    attractions: String,
    contact_us: String,
    information: {
        type: Types.ObjectId,
        ref: "Information"
    }
})

const Description = mongoose.model("Description", dataDesc)

module.exports = Description