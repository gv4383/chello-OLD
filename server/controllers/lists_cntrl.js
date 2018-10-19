/****** LISTS CONTROLLER ******/

// Contains all the different lists someone may create
let lists = ["Hello", "World", ":)"];

const getLists = (req, res) => {
  res.status(200).send(lists);
};

const createList = (req, res) => {
  const { listName } = req.body;
  lists.push(listName);
  res.status(200).send(lists);
};

module.exports = {
  getLists,
  createList
};
