const { fetchMovieIdImdb, fetchMovieInfoImdb } = require('../services/imdb_api_call');
const fetchStreamingInfo  = require('../services/streaming_api_call');


const MovieIdController = async (req, res, movieName) => {
    try {
        const movieId = await fetchMovieIdImdb(movieName);

        if (!movieId) {
            return res.status(500).json({ error: 'Failed to get movie id' });
        }

        return movieId;
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching movie id' });
    }
}

const MovieInfoController = async (req, res, movieId) => {
    try {
        const information = await fetchMovieInfoImdb(movieId);

        if (!information) {
            return res.status(500).json({ error: 'Failed to get movie information' });
        }

        return information;
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching movie information' });
    }
}

const MovieStreamingController = async (req, res, movieName) => {
    try {
        const information = await fetchStreamingInfo(movieName);

        if (!information) {
            return res.status(500).json({ error: 'Failed to get movie streaming information' });
        }

        return information;
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching movie streaming information' });
    }
}

module.exports = {MovieInfoController, MovieIdController, MovieStreamingController};