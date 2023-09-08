"use strict";

//Requires
let express = require("express");
let bodyParser = require("body-parser");
let router = express.Router();

//Execute express

let app = express();

//Load route's files

let books_routes = require("./routes/book.tsx");
let author_routes = require("./routes/author.tsx");

//Middlewares
app.use(bodyParser.urlencoded({ extended: false, limit: "1.5mb" }));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Rewrite Routes
app.use("/api", books_routes);
app.use("/api", author_routes);

//Export Module
module.exports = app;
