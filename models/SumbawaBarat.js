const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataKSB = new Schema ({
    
    tourism_spot: String,
    image: String,
    description: {
        type: Types.ObjectId,
        ref: "description"
    },
    store: {
        type: Types.ObjectId,
        ref: "store"
    },
    transportation: {
        type: Types.ObjectId,
        ref: "transportation"
    },
    comment: {
        type: Types.ObjectId,
        ref: "comment"
    }
})

const KSB = mongoose.model("Sumbawa", dataKSB)

module.exports = KSB