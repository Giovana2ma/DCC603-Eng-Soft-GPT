const doubleMovieFormValidation = (reqBody, res) => {
    const { movie1, movie2 } = reqBody;
    return (movie1 !== "" || movie2 !== "");
};

module.exports = { doubleMovieFormValidation };