const axios = require('axios');


const fetchArticleRecChatGPT = async (movieList) => {
    try{
        const headers = {"Authorization": `Bearer ${process.env.CHAT_GPT_KEY}`}
        const url = 'https://api.openai.com/v1/chat/completions';
        const data = {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: `You are a cinema expert. Create a movie recommendation based on the user entry, that can be anything, you should come up with a movie or series that exists and is somehow related to the theme, name, movie, actor given. Your answer should be ONLY the name of movie recommended and nothing more`
                },
                {
                    role: 'user',
                    content: movieList.join(', ')
                }
            ],
            temperature: 1.0,
            top_p: 1,
            max_tokens: 2048
        };

        const response = await axios.post(url, data, { headers });
        console.log(response.data.choices[0].message.content);
        return response.data.choices[0].message.content;
    } catch(error) {
        console.log(error)
        return undefined;
    }
};


module.exports = { fetchArticleRecChatGPT };
