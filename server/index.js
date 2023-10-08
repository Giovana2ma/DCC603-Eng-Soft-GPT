const express = require('express');
const cors = require('cors');
const body_parser = require("body-parser");
require("dotenv").config(); 
const app = express();
const body_parser = require("body-parser");




const {MovieInfoController, MovieIdController}= require('./controllers/movie_controller');

const NewRecommendationController = require('./controllers/recommendation_controller');

<<<<<<< HEAD

const { doubleMovieFormValidation } = require('./forms/double_movie_form')

=======
const { doubleMovieFormValidation } = require('./forms/double_movie_form')

>>>>>>> 3bd4467cfcc604361dbe9a9816e7fe2afc35977b
const { singleMovieFormValidation } = require('./forms/single_movie_form')


app.use(body_parser.json());
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
app.use(body_parser.json());
=======

>>>>>>> 3bd4467cfcc604361dbe9a9816e7fe2afc35977b

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/', (req, res) => {
  return res.send(`Function status: ONLINE`);
});

app.post('/getNewSingleRec', async (req, res) => {
  if (req.method !== 'POST')
    return res.status(400).json({ error: 'Method not allowed' });

<<<<<<< HEAD
  if (!singleMovieFormValidation(req.body, res))
=======
    if (!singleMovieFormValidation(req.body, res))
>>>>>>> 3bd4467cfcc604361dbe9a9816e7fe2afc35977b
    return res.status(400).json({ error: 'Invalid form' });

  const movie = req.body.movie;
  const movieList = [movie];
  let movieName =   await NewRecommendationController(req, res, movieList);
  let movieId   =   await  MovieIdController(req, res, movieName);
  let movieInfo =   await  MovieInfoController(req, res, movieId);
  return res.json({
    movieInfo: movieInfo
  });
});

app.post('/getNewDoubleRec', async (req, res) => {
  if (req.method !== 'POST')
    return res.status(400).json({ error: 'Method not allowed' });

  // VERIFY IF BODY VALUES ARE VALID
  if (!doubleMovieFormValidation(req.body, res))
    return res.status(400).json({ error: 'Invalid form' });

  const { movie1, movie2 } = req.body;
  const movieList = [movie1, movie2];
  let movieName =   await NewRecommendationController(req, res, movieList);
  let movieId   =   await  MovieIdController(req, res, movieName);
  let movieInfo =   await  MovieInfoController(req, res, movieId);
  return res.json({
    movieInfo: movieInfo
  });
});


app.listen(port, () => {
  console.log(`movie recommendations: listening on port ${port}`);
});