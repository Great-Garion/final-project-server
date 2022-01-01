const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataComment = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "user",
  },
  Comment: String,
  Bintang: Number,
  wisata: {
    type: Types.ObjectId,
    ref: "wisata"
  }
});

const Comment = mongoose.model("comment", dataComment);

module.exports = Comment;
