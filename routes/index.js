const express = require("express");
const router = express.Router();

const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const validateToken = require("../middleware/middleware");

router.get("/", (req, res) => {
  res.json("Loka Kota");
});
router.use("/auth", authRouter);

router.use(validateToken);

router.use("/user", userRouter);

module.exports = router;
