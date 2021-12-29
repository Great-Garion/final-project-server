const express = require("express");
const router = express.Router();

const {
  getAllDataKSB,
  getDataKSBByID,
  addDataKSB,
  editDataKSB,
  deleteDataKSB,
} = require("../controllers/KSBController");

router.get("/", getAllDataKSB);
router.get("/:id", getDataKSBByID);
router.post("/", addDataKSB);
router.delete("/:id", deleteDataKSB);
router.put("/:id", editDataKSB);

module.exports = router;
