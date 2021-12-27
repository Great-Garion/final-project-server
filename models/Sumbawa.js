const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataSumbawa = new Schema ({
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

const Sumbawa = mongoose.model("Sumbawa", dataSumbawa)

module.exports = Sumbawa