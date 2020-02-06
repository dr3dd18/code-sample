const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/email', (req, res) => {
  db.query('SELECT email FROM users WHERE id = ' + req.query.id);
    .then((record) => {
      // do stuff
      res.send(record[0]);
    })
});
