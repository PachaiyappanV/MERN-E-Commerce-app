require("dotenv").config();
require("express-async-errors");

const express = require("express");
const { connectDB } = require("./db/connect");
const app = express();

app.get("/", (req, res) => {
  res.send("home");
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is up and listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
