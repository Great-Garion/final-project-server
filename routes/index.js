const express = require("express");
const router = express.Router();

const storeRouter = require ("./StoreRouter.js")
const transportRouter = require("./transportRouter");
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const commentRouter = require("./commentRouter");
const validateToken = require("../middleware/Middleware");

router.get("/", (req, res) => {
  res.json("Loka Kota");
});

router.use("/store", storeRouter)
router.use("/transport", transportRouter);

router.use("/auth", authRouter);

// router.use(validateToken);

router.use("/user", userRouter);
router.use("/comment", commentRouter);

module.exports = router;
