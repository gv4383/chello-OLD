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

/****** Lists ******/
// Gets list of lists
app.get("/api/lists", lists_cntrl.getLists);

// Adds a new list to list of lists
app.post("/api/lists", lists_cntrl.createList);

// Edits a list's name
app.put("/api/lists/name/:id", lists_cntrl.editListName);

// Deletes a list from the list of lists
app.delete("/api/lists/:id", lists_cntrl.deleteList);
/****** Lists ******/

/****** List ******/
// Adds a new to-do list item to the specified list
app.put("/api/lists/:listId", lists_cntrl.addItem);

// Deletes a specified list item from the specified list
app.delete("/api/lists/:listId/listItem/:listItemId", lists_cntrl.deleteItem);
/****** List ******/

// Sets port which the server runs on
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening @ port: ${port}`);
});
