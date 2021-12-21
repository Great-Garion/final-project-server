const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const dataComment = new Schema({
  Comment: String,
  user: {
    type: Types.ObjectId,
    ref: "user",
  },
});

const Comment = mongoose.model("Comment", dataComment);

module.exports = Comment;
