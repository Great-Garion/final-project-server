const express = require("express");
const router = express.Router();
const {
  getAllDataWisata,
  getDataWisataByID,
  addDataWisata,
  deleteDataWisata,
  editDataWisata,
} = require("../controllers/WisataController");

router.get("/", getAllDataWisata);
router.get("/:id", getDataWisataByID);
router.post("/", addDataWisata);
router.delete("/:id", deleteDataWisata);
router.put("/:id", editDataWisata);

module.exports = router;
