const express = require('express');
const cors = require('cors');
const app = express();
const body_parser = require("body-parser");

const NewRecommendationController = require('./controllers/recommendation_controller');

const { doubleMovieFormValidation } = require('./forms/double_movie_form')

const { singleMovieFormValidation } = require('./forms/single_movie_form')


app.use(body_parser.json());
app.use(cors());
app.use(express.json());


const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/', (req, res) => {
  return res.send(`Function status: ONLINE`);
});

app.post('/getNewSingleRec', async (req, res) => {
  if (req.method !== 'POST')
    return res.status(400).json({ error: 'Method not allowed' });

    if (!singleMovieFormValidation(req.body, res))
    return res.status(400).json({ error: 'Invalid form' });

  const movie = req.body.movie;
  const movieList = [movie];
  return await NewRecommendationController(req, res, movieList);
});

app.post('/getNewDoubleRec', async (req, res) => {
  if (req.method !== 'POST')
    return res.status(400).json({ error: 'Method not allowed' });

  // VERIFY IF BODY VALUES ARE VALID
  if (!doubleMovieFormValidation(req.body, res))
    return res.status(400).json({ error: 'Invalid form' });

  const { movie1, movie2 } = req.body;
  const movieList = [movie1, movie2];

  return await NewRecommendationController(req, res, movieList);
});


app.listen(port, () => {
  console.log(`movie recommendations: listening on port ${port}`);
});