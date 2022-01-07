require("dotenv").config();
const { status } = require("express/lib/response");
const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  try {
    console.log(req.originalUrl)
    const DT = req.headers.authorization;
    const token = DT.split(" ")[1];

    if (token) {
      const payload = jwt.verify(token, process.env.JWT_KEY);

      req.payload = payload;
      console.log(payload)
      next();
    }
  } catch (error) {

    console.log(error.message);
    res.json("Invalid token").status(500);
  }
};

module.exports = validateToken;
