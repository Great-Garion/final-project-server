const express = require("express");
const cors = require("cors")

const app = express();

const router = require("./routes")
const PORT = process.env.PORT || 4000;

const db = require("./config/connect")

db.connection.on("error", (err) => {
  console.log(err);
});

app.use(cors())
app.use(express.json());
app.use(router)

app.listen(PORT, () => {
  console.log("Loka Kota From Express Running on PORT " + PORT);
});
