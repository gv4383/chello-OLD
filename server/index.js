require("dotenv").config;
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const app = express();

app.use(json());
app.use(cors());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening @ port: ${port}`);
});
