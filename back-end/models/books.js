const fs = require('fs');
const path = require('path');
const user = require('../models/users');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'books.json'
);

const getbooksFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, name, img, description, dis,prix,genre) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.description = description;
    this.dis = dis;
    this.prix = prix;
    this.genre = genre;
  }
  /*save() {
    getbooksFromFile(books => {
      if (this.id) {
        const existinguserIndex = books.findIndex(
          user => user.id === this.id
        );
        us = books.find(user => user.email == this.email);
        if(us){
          return
        } else{
        const updatedbooks = [...books];
        updatedbooks[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedbooks), err => {
          console.log(err);
        });
      }} else {
        this.id = Math.random().toString();
        books.push(this);
        fs.writeFile(p, JSON.stringify(books), err => {
          console.log(err);
        });
      }
    });
  }
  */
  static fetchAll(cb) {
    getbooksFromFile(cb);
  }
  static modifier(id,name,des,prix,ds,genre){
    getbooksFromFile(books => {
      const bo = books.find(book => book.id === id);
      bo.name = name;
      bo.genre = genre;
      bo.description = des;
      bo.prix = prix;
      bo.dis= ds;
      fs.writeFile(p,JSON.stringify(books), err => {
        console.log(err);
        user.modifierbooks(bo);
      });
      
    })
  }
  static supprimer (id){
    getbooksFromFile(books => {
      const updatedbooks = books.filter(us => us.id !== id);
      console.log(updatedbooks);
      fs.writeFile(p, JSON.stringify(updatedbooks), err => {
        console.log(err);
        user.supprimerbooks(id);
      });
    })
  }
};