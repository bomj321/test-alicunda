"user strict";

let express = require("express");
let router = express.Router();

let ProjectController = require("../controllers/author.tsx");

//Test routes
router.post("/author", ProjectController.save);
router.get("/authors", ProjectController.getAuthors);

module.exports = router;
