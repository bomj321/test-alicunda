"user strict";
let validator = require("validator");
let AuthorSchema = require("../models/author.tsx");

let controller = {
  save: (req, res) => {
    //Recolect params by post
    let params = req.body;
    //Validate data

    if (params.name) {
      //Create object
      let authorSchema = new AuthorSchema();

      //Assign values
      authorSchema.name = params.name;
      authorSchema.books = params.books;
      //Save topic

      authorSchema.save((err, authorStored) => {
        if (err || !authorStored) {
          return res.status(500).send({
            status: "error",
            message: "Error saving author",
          });
        }

        //Return response
        return res.status(200).send({
          status: "success",
          authorStored,
        });
      });
    } else {
      return res.status(200).send({
        message: "The data is not valid",
      });
    }
  },

  getAuthors: (req, res) => {
    AuthorSchema.find()
      .populate({
        path: "books", // populate books
      })
      .exec((err, authors) => {
        if (err || !authors) {
          return res.status(500).send({
            status: "error",
            message: "Failed to get the authors",
          });
        }

        // return response (Topic and all pages)
        return res.status(200).send({
          status: "success",
          authors,
        });
      });
  },
};

module.exports = controller;
