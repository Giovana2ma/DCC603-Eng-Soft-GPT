function movie_genre(genres) {
    if (genres.length <= 3) {
        return genres;
    } else {
        return genres.slice(0, 3);
    }
}

module.exports = movie_genre; 
