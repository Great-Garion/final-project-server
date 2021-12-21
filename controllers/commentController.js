const comments = require("../models/comment");

module.exports = {
  getAllComment: async (req, res) => {
    try {
      const allComment = await comments.find({}, "-__v");

      res.json(allComment);
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
        comment: req.body.comment,
        user: comments.user,
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
