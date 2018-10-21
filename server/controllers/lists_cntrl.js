/****** LISTS CONTROLLER ******/

let test0 = {
  id: 0,
  listName: "Hello",
  description: ""
};

let test1 = {
  id: 1,
  listName: "World",
  description: ""
};

let test2 = {
  id: 2,
  listName: ":)",
  description: ""
};

// Contains all the different lists someone may create
let lists = [test0, test1, test2];
let id = 2;

// Sends the list of lists to the front end
const getLists = (req, res) => {
  res.status(200).send(lists);
};

// Adds a new list to the list of lists
const createList = (req, res) => {
  const { listName } = req.body;
  id++;

  let newListName = {
    id,
    listName,
    description: ""
  };

  lists.push(newListName);
  res.status(200).send(lists);
};

// Deletes a list name from the list of list names
const deleteList = (req, res) => {
  const { id } = req.params;

  let listIndex = lists.findIndex(list => list.id == id);
  lists.splice(listIndex, 1);
  res.status(200).send(lists);
};

module.exports = {
  getLists,
  createList,
  deleteList
};
