const express = require("express");
const router = express.Router();

const {
  getAllStore,
  getStorebyID,
  addStore,
  deleteStore,
  editStore,
} = require("../controllers/StoreController");

router.get("/", getAllStore);
router.get("/id", getStorebyID);
router.post("/", addStore);
router.delete("/id", deleteStore);
router.put("/:id", editStore);

module.exports = router;
