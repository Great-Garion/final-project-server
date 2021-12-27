const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataWisata = new Schema ({
    Sumbawa: {
        type: Types.ObjectId,
        ref: "sumbawa"
    },
    Sumbawa_Barat: {
        type: Types.ObjectId,
        ref: "KSB"
    }
})

const Wisata = mongoose.model("Wisata", dataWisata)

module.exports = Wisata