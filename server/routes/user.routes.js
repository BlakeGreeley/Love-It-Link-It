const userController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/user", userController.createNewUser);
    app.get("/api/user", userController.getAllUsers);
    app.get("/api/user/:id", userController.getOneUser);
    app.delete("/api/user/:id", userController.deleteUser);
}