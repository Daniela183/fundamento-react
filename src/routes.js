const UseController = require("./controllers/UseController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: UseController.listUsers,
  },{
    endpoint: "/users/:id",
    method: "GET",
    handler: UseController.getUsersById,
  },{
    endpoint: "/produtos",
    method: "GET",
    handler: UseController.listUsers,
  }
];
