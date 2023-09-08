"user strict";

let express = require("express");
let router = express.Router();
let BooksController = require("../controllers/book.tsx");

//Test routes
router.post("/book", BooksController.save);
router.get("/book/:bookId", BooksController.getBook);
router.get("/books", BooksController.getBooks);

module.exports = router;
