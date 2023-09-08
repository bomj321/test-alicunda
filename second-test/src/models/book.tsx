"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BooksSchema = Schema(
  {
    title: String,
    chapters: Number,
    pages: Number,
    authors: [{ type: mongoose.Types.ObjectId, ref: "Author" }],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
module.exports = mongoose.model("Book", BooksSchema);
