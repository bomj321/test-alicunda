"user strict";
let validator = require("validator");
let BooksSchema = require("../models/book.tsx");

let controller = {
  save: (req, res) => {
    //Recolect params by post
    let params = req.body;
    //Validate data

    if (params.title && params.chapters && params.pages) {
      //Create object
      let booksSchema = new BooksSchema();

      //Assign values
      booksSchema.title = params.title;
      booksSchema.chapters = params.chapters;
      booksSchema.pages = params.pages;
      booksSchema.authors = params.authors;
      //Save topic

      booksSchema.save((err, bookStored) => {
        if (err || !bookStored) {
          return res.status(500).send({
            status: "error",
            message: "Error saving book",
          });
        }

        //Return response
        return res.status(200).send({
          status: "success",
          bookStored,
        });
      });
    } else {
      return res.status(200).send({
        message: "The data is not valid",
      });
    }
  },

  getBooks: (req, res) => {
    BooksSchema.find()
      .populate({
        path: "authors", // populate blogs
      })
      .exec((err, books) => {
        if (err || !books) {
          return res.status(500).send({
            status: "error",
            message: "Failed to get the books",
          });
        }

        return res.status(200).send({
          status: "success",
          books,
        });
      });
  },

  getBook: (req, res) => {
    //Pick id topic from URL
    let bookId = req.params.bookId;
    //Find id by topic
    BooksSchema.findById(bookId).exec((err, book) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error getting book.",
        });
      }

      if (!book) {
        return res.status(500).send({
          status: "error",
          message: "There is no book.",
        });
      }

      //Return response
      return res.status(200).send({
        status: 200,
        bookId: book._id,
        pageByChapter: (book.pages / book.chapters).toFixed(2),
      });
    });
  },
};

module.exports = controller;
