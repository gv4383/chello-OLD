/****** LISTS CONTROLLER ******/

// Test data to send to front end
let test0 = {
  id: 0,
  listName: "Hello",
  todoList: ["Say hello", "wave"]
};

let test1 = {
  id: 1,
  listName: "World",
  todoList: ["Reduce", "Reuse", "Recycle"]
};

let test2 = {
  id: 2,
  listName: ":)",
  todoList: ["Don't forget to smile!"]
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
  id++;

  let newListName = {
    id,
    listName: "New List",
    todoList: []
  };

  lists.push(newListName);
  res.status(200).send(lists);
};

// Edits a list's name
const editListName = (req, res) => {
  const { id } = req.params;
  const { listName } = req.body;

  let listIndex = lists.findIndex(list => list.id == id);
  lists[listIndex].listName = listName;
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
  editListName,
  deleteList
};
