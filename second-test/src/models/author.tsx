"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthorSchema = Schema(
  {
    name: String,
    books: [{ type: mongoose.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Author", AuthorSchema);
