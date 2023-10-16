const axios = require('axios');

const streaming_platforms = require('./streaming_info');



const fetchStreamingInfo = async (movieName) => {
    
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/search/title',
        params: {
          title: movieName,
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
        if(response.data.result[0].streamingInfo.br){
            return streaming_platforms(response.data.result[0].streamingInfo.br);
        }else{
            info = {
                'platform': [],
                'links': [],
            }
            return info;
        }
    } catch (error) {
        console.error(error);
    }
};


module.exports = fetchStreamingInfo; 