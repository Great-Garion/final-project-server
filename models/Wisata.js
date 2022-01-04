const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataWisata = new Schema ({
    tourism_spot: String,
    image: [String],
    address: String,
    desc: String,
    kabupaten: String,
    attractions: [String],
    contact_us: [String],
    police: [String],
    hospital:[String],
    hotel: [String],
    restaurant: [String],
    worship: [String],
    jarak: [String],
    transport: [String]
    // store: {
    //     type: Types.ObjectId,
    //     ref: "store"
    // },
    // transportation: {
    //     type: Types.ObjectId,
    //     ref: "transport"
    // },
    // comment: {
    //     type: Types.ObjectId,
    //     ref: "comment"
    // }
})

const Wisata = mongoose.model("wisata", dataWisata)

module.exports = Wisata