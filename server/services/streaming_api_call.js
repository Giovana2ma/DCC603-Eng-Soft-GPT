const axios = require('axios');

const streaming_platforms = require('./streaming_info');



const fetchStreamingInfo = async (movie) => {
    
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/title',
        params: {
        title: movie,
        country: 'BR',
        show_type: 'all',
        output_language: 'en'
        },
        headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        return streaming_platforms(response.data.result[0].streamingInfo.br);
    } catch (error) {
        console.error(error);
    }
};

fetchStreamingInfo('handmaidstale');

module.exports = fetchStreamingInfo; 