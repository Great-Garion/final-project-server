const express = require("express");
const router = express.Router();

const validateToken = require("../middleware/auth");

const storeRouter = require ("./storeRouter.js")
const transportRouter = require("./transportRouter");
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const commentRouter = require("./commentRouter");
const descRouter = require("./descRouter")
const infoRouter = require("./infoRouter")
const kabSumbarRouter = require('./kabSumbarRouter')
const kabSumberRouter = require("./kabSumberRouter")
const wisataRouter = require("./wisataRouter")

router.get("/", (req, res) => {
  res.json("Loka Kota");
});

router.use("/store", storeRouter)
router.use("/transport", transportRouter);
router.use("/desciption", descRouter)
router.use("/information", infoRouter)
router.use("/Sumbawa", kabSumberRouter)
router.use("/ksb", kabSumbarRouter)
router.use("/wisata", wisataRouter)
router.use("/auth", authRouter);

router.use(validateToken);

router.use("/user", userRouter);
router.use("/comment", commentRouter);

module.exports = router;
