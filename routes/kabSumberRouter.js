const express = require("express");
const router = express.Router();

const {
  getAllDWS,
  getDWSbyID,
  addDWS,
  deleteDWS,
  editDWS,
} = require("../controllers/SumbawaController");

router.get("/", getAllDWS);
router.get("/:id", getDWSbyID);
router.post("/", addDWS);
router.delete("/:id", deleteDWS);
router.put("/:id", editDWS);

module.exports = router;
