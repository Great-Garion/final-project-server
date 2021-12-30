const express = require("express");
const router = express.Router();

const {
  getAllInfo,
  getInfoByID,
  addNewInfo,
  deleteInfo,
  editInfo,
} = require("../controllers/informationController");

router.get("/", getAllInfo);
router.get("/:id", getInfoByID);
router.post("/", addNewInfo);
router.delete("/:id", deleteInfo);
router.put("/:id", editInfo);

module.exports = router;
