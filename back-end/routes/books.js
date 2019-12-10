const express = require('express');

const books = require('../controllers/books');

const router = express.Router();
router.get('/', books.get);
//router.post('/', books.post);
router.post('/modifier', books.modifier);
router.post('/supprimer', books.supprimer);

module.exports = router;
