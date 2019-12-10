const user = require('../models/users');
exports.get = (req, res, next) => {
    user.fetchAll(users => {
      res.status(200).json(users);
    });
  };
  exports.post = (req, res, next) => {
    const name = req.body.na;
    const email = req.body.em;
    const password = req.body.password;
    const role = req.body.role;
    const us = new user(null,name,email,password,role,[]);
    console.log(req.body);
    us.save(); 
    res.status(200).json('success');
};
exports.modifier = (req, res, next) => {
  const name = req.body.na;
  const email = req.body.em;
  const id = req.body.i;
  user.modifier(id,name,email);
  res.status(200).json('success');
};
exports.supprimer = (req, res, next) => {
  user.supprimer(req.body.i);
  res.status(200).json('success');
};
exports.ajouter = (req, res, next) => {
  id = req.body.id;
  book = req.body.bo;
  console.log('ajouter');
  console.log(req.body);
  user.ajouter(id,book);
  res.status(200).json('success');
};
exports.getuser = (req, res, next) => {
  user.getbyid(req.params.id,data => { const us = data;
    res.status(200).json(us);
  } );
};
exports.cancel = (req, res, next) => {
  const id_book = req.body.book;
  const id_user = req.body.id;
  user.cancel(id_user,id_book);
  console.log('hi2');
  res.status(200).json('success');
};