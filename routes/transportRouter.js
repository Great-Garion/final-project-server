const express = require("express");
const router = express.Router();

const {
  getAllTransport,
  getTransportByID,
  addTransport,
  editTransport,
  deleteTransport,
} = require("../controllers/transportController");

router.get("/", getAllTransport);
router.get("/id", getTransportByID);
router.post("/", addTransport);
router.delete("/id", deleteTransport);
router.put("/:id", editTransport);

module.exports = router;
