const mongoose = require("mongoose");
const comments = require("../models/Comment");

module.exports = {
  getAllComment: async (req, res) => {

    try {
      const { wisata } = req.query;

      if (wisata) {
        const commentByWisata = await comments.find({ wisata }).populate("user", "-__v -password")
        res.json(commentByWisata);
      } else {
        const allComment = await comments
          .find({}, "-__v")
          .populate("user", "-__v -password");
        res.json(allComment);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internam Server Error",
      });
    }
  },

  getCommentByID: async (req, res) => {
    try {
      const { id } = req.params;
      const commentByID = await comments.findById(id).populate("user", "-__v -password");

      res.json(commentByID);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  addNewComment: async (req, res) => {
    try {
      const newComment = req.body;
      newComment.user = req.payload._id
      await comments.create(newComment);

      res.json("Adding New Comment is success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { id } = req.params;
      await comments.findByIdAndDelete(id);

      res.json("Deleted a Comment is Success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editComment: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        user: req.body.user,
        comment: req.body.comment,
      };

      await comments.findByIdAndUpdate(id, update);

      res.json("Editing a Comment Success");
    } catch (error) {
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
