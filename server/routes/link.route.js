const linkController = require("../controllers/link.controller");

module.exports = (app) => {
    app.post("/api/link", linkController.createNewLink);
    app.get("/api/link/:id", linkController.getOneLink);
    app.get("api/link", linkController.getAllLinks);
    app.put("/api/pet/:id", linkController.updateLink);
    app.delete("/api/link/:id", linkController.deleteLink);
}