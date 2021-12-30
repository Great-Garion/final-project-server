const express = require("express");
const router = express.Router();

const {
  getAllComment,
  getCommentByID,
  addNewComment,
  deleteComment,
  editComment,
} = require("../controllers/commentController");

router.get("/", getAllComment);
router.get("/:id", getCommentByID);
router.post("/", addNewComment);
router.delete("/:id", deleteComment);
router.put("/:id", editComment);

module.exports = router;
