const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataComment = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "user",
  },
  review: String,
  rating: Number,
  wisata: {
    type: Types.ObjectId,
    ref: "wisata"
  }
});

const Comment = mongoose.model("comment", dataComment);

module.exports = Comment;
