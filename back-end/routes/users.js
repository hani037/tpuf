const express = require('express');

const users = require('../controllers/users');

const router = express.Router();

router.get('/', users.get);
router.post('/', users.post);
router.post('/modifier', users.modifier);
router.post('/supprimer', users.supprimer);
router.post('/ajouter', users.ajouter);
router.post('/cancel', users.cancel);
router.get('/:id', users.getuser);
module.exports = router;
