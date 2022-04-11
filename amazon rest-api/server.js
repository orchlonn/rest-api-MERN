const express = require("express");
const dotenv = require("dotenv");
var fs = require("fs");
var path = require("path");
var rfs = require("rotating-file-stream");

var morgan = require("morgan");
const logger = require("./middleware/logger");

// Router оруулж ирэх
const categoriesRoutes = require("./routes/categories");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

// create a write stream (in append mode)
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

const app = express();

app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api/v1/categories", categoriesRoutes);

app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);
