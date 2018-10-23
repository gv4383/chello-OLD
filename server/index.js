/****** LOCAL SERVER ******/
require("dotenv").config;
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const lists_cntrl = require("./controllers/lists_cntrl");

// Sets up server
const app = express();

app.use(json());
app.use(cors());

// Gets list of lists
app.get("/api/lists", lists_cntrl.getLists);

// Adds a new list to list of lists
app.post("/api/lists", lists_cntrl.createList);

// Edits a list's description
app.put("/api/lists/:id", lists_cntrl.editListDescription);

// Deletes a list from the list of lists
app.delete("/api/lists/:id", lists_cntrl.deleteList);

// Sets port which the server runs on
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening @ port: ${port}`);
});
