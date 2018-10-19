/****** LISTS CONTROLLER ******/

// Contains all the different lists someone may create
let lists = ["Hello", "World", ":)"];

const getLists = (req, res, next) => {
  res.status(200).send(lists);
};

module.exports = {
  getLists
};
