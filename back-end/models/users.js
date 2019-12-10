const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'users.json'
);

const getusersFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class User {
  constructor(id,name,email,password,role,books) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password =password;
    this.role = role;
    this.book = books;
  }
  save() {
    getusersFromFile(users => {

        this.id = Math.random().toString();
        users.push(this);
        fs.writeFile(p, JSON.stringify(users), err => {
          console.log(err);
        });
      });
  }
  static fetchAll(cb) {
    getusersFromFile(cb);
  }
  static modifier(id,name,email){
    getusersFromFile(users => {
      const us = users.find(user => user.id === id);
      console.log(us);
      us.email=email;
      us.name=name;
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });

    })
  }
  static ajouter(id,book){
    getusersFromFile(users => {
      const us = users.find(user => user.id === id);
        const bk = us.book.find(bo => bo.bo.id === book.id );
        if(bk){
          bk.nb++
        } else {
          us.book.push({
            bo: book,
            nb: 1
          })
        }
     
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });
    })
  }
  static getbyid(id,cb){
    getusersFromFile(users => {
      const us = users.find(user => user.id === id);
      cb(us)
      });
  }
  static supprimerbooks(id){
    getusersFromFile(users => {
    users.forEach(user => {
     user.book = user.book.filter(book =>book.bo.id !==id );
    });
    fs.writeFile(p, JSON.stringify(users), err => {
      console.log(err);
    });
      });
  }
  static modifierbooks(book){
    getusersFromFile(users => {
    users.forEach(user => {
     const bo = user.book.find(bo => bo.bo.id ===book.id )
     if(bo){
     bo.bo.name = book.name;
     bo.bo.genre = book.genre;
     bo.bo.description = book.des;
     bo.bo.prix = book.prix;
     bo.bo.dis= book.ds;
     console.log(book);
     }
    });
    fs.writeFile(p, JSON.stringify(users), err => {
      console.log(err);
    });
      });
  }
  static cancel (id_user,id_book){
    getusersFromFile(users => {
      const us = users.find(user => user.id === id_user);
      us.book = us.book.filter(book => book.bo.id !== id_book);
      console.log('hi');
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });
      });
  } 

  static supprimer (id){
    getusersFromFile(users => {
      const updatedusers = users.filter(us => us.id !== id);
      console.log(updatedusers);
      fs.writeFile(p, JSON.stringify(updatedusers), err => {
        console.log(err);
      });
    })
  }
};
