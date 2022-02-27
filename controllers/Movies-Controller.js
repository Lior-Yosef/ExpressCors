const fs = require('fs');

const GetMovies = (req, res) => {
    const Movies = require("../movies.json");
    if (Movies) res.send({ Movies });
    res.status(401).send({ massage: "no movies found" });
};

const GetMoviesById = (req, res) => {
    const Movies = require("../movies.json");
    const Movie = Movies.find((MovieItem) => MovieItem.id === parseInt(req.params.id));
    if (Movie) res.send({ Movie });
    res.status(401).send({ massage: `no movies wite ${req.params.id} id found` });
}

const AddMovie = (req, res) => {
    const Movies = require("../movies.json");
    const movie = req.body.Movie;
    Movies.push("../movies.json", JSON.stringify(movie), () => { });
    res.send({ massage: "movie added" });
}
const UpdateMovie = (req, res) => {
    let movies = require("../movies.json");
    let movie = movies.find((movieItem) => movieItem.id === parseInt(req.params.id));
    movies[movies.indexOf(movie)] = { ...movie, ...req.body };
    fs.writeFile("./movies.json", JSON.stringify(movies),()=>{});
    res.send({movies});
}
const DeleteMovie = (req, res) => {
    let movies = require("../movies.json");
    let filterMovies = movies.filter(movieItem => movieItem.id !== parseInt(req.params.id));
    fs.writeFile("./movies.json", JSON.stringify(filterMovies), () => { });
    res.send({ massage: "movies deleted" });
};

module.exports = { GetMovies, GetMoviesById, AddMovie,UpdateMovie, DeleteMovie };