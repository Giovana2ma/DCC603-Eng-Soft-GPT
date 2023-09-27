const singleMovieFormValidation = (reqBody, res) => {
    const { movie } = reqBody;
    return (movie !== "" );
};

module.exports = { singleMovieFormValidation };