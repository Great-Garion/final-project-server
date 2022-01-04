const mongoose = require("mongoose");
const comments = require("../models/Comment");

module.exports = {
  getAllComment: async (req, res) => {
    //cari komen berdasarkan id wisata, query yg tampilin id wisata
    // console.log(wisata)
    try {
      const {wisata} = req.query
      const dataWisata = await comments.find({wisata: mongoose.Types.ObjectId(wisata)})
      const allComment = await comments.find({}, "-__v").populate("user", "-__v -password");

      if(wisata){
        res.json(dataWisata)
      }
      else{
        res.json(allComment)
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
      const commentByID = await comments.findById(id);

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
