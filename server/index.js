const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "1000mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }));
app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `*`);
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
const userList = require("./constants/users.json");
app.get("/", (req, res) => {
  res.status(200).json({
    users: userList
  });
});
app.listen(4000, () => {
  console.log("SERVER RUNNING ON 4000");
});
