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

const getLists = (req, res) => {
  res.status(200).send(lists);
};

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

module.exports = {
  getLists,
  createList
};
