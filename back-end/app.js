const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const http = require("http");
const usersRoutes = require('./routes/users');
const booksRoutes = require('./routes/books');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  
app.use('/books', booksRoutes);
app.use('/users', usersRoutes);
app.set("port", 3000);
const server = http.createServer(app);
server.listen(3000);