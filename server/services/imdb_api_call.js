const axios = require('axios');
const movie_genres = require('./movie_genres');


const fetchMovieIdImdb = async (movie) => {
    const options = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/find',
        params: {q: movie},
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };
    try{
        const response = await axios.request(options);

        let movieId = response.data.results[0].id.split("/")[2];
        return movieId;
    } catch(error) {
        return undefined;
    }
};

const fetchMovieInfoImdb = async (movieId) => {

    const options = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/get-overview-details',
        params: {
          tconst: movieId
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };
      
    try {
        const response = await axios.request(options);
        info = {
            'link': "https://www.imdb.com" + response.data.id,
            'image': response.data.title.image.url,
            'rating': response.data.ratings.rating,   
            'year': response.data.title.year,
            'title': response.data.title.title,
            'summary': response.data.plotOutline.text,
            'genres': movie_genres(response.data.genres)
        }
        return info;
    } catch(error) {
        console.log(error)
        return undefined;
    }
};

module.exports = { fetchMovieIdImdb, fetchMovieInfoImdb}; 