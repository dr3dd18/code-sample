const express = require('express');
const db = require('../lib/db');
const router = express.Router();

router.get('/search', (req, res) => {
  const results = db.search(req.query.q);

  if (results.length === 0) {
    return res.send('<p>No results found for "' + req.query.q + '"</p>');
  }

  // ...
});
