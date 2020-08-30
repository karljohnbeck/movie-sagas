const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

// get all the genres from a specific movie
router.get('/:id', (req, res) => {
  console.log('in get genre server')
  console.log(req.params)

  // query text to sleect the movie data and genres linked to that movie
  const queryText = `SELECT "movies".description, 
  "movies".poster, "movies".title, "genres".name FROM "movies"
  JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
  JOIN "genres" ON "genres".id = "movies_genres".genres_id
  WHERE "movies".id = $1;`

  pool.query(queryText, [req.params.id])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('error in router get genres')
      res.sendStatus(500)
    })
});

module.exports = router;