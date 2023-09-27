const { fetchArticleRecChatGPT } = require('../services/chatgpt_api_call');

const NewRecommendationController = async (req, res, movieList) => {
    try {
        const recommendation = await fetchArticleRecChatGPT(movieList);

        if (!recommendation) {
            return res.status(500).json({ error: 'Failed to get recommendation' });
        }

        return res.json({ rec: recommendation });
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching recommendation' });
    }
}

module.exports = NewRecommendationController;