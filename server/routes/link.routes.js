const linkController = require("../controllers/link.controller");

module.exports = (app) => {
    app.post("/api/link", linkController.createNewLink);
    app.get("api/link", linkController.getALlLinks);
}