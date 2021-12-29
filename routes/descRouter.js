const express = require("express");
const router = express.Router();

const {
  getAllDesc,
  getDescbyID,
  addDesc,
  deleteDesc,
  editDesc,
} = require("../controllers/DescriptionController");

router.get("/", getAllDesc);
router.get("/:id", getDescbyID);
router.post("/", addDesc);
router.delete("/:id", deleteDesc);
router.put("/:id", editDesc);

module.exports = router;
