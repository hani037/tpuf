const book = require('../models/books');
exports.get = (req, res, next) => {
    book.fetchAll(books => {
      res.status(200).json(books);
    });
  };
  /*exports.post = (req, res, next) => {
    const name = req.body.na;
    const email = req.body.em;
    const password = req.body.password;
    const role = req.body.role;
    const us = new book(null,name,email,password,role,[]);
    console.log(req.body);
    us.save(); 
    res.status(200).json('success');
    
};
*/
exports.modifier = (req, res, next) => {
  name = req.body.na;
  id = req.body.i;
  des = req.body.des;
  prix = req.body.px;
  ds = req.body.ds;
  genre = req.body.gre;
  console.log(req.body)
  book.modifier(id,name,des,prix,ds,genre);
  res.status(200).json('success');
};
exports.supprimer = (req, res, next) => {
  book.supprimer(req.body.i);
  res.status(200).json('success');
};