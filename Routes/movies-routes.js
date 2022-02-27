const MoviesRoutes = require("express").Router();
const MovieController = require("../controllers/Movies-Controller");
const {GetMovies, GetMoviesById, AddMovie,UpdateMovie, DeleteMovie} = MovieController;

MoviesRoutes.get("/",GetMovies);
MoviesRoutes.get("/:id",GetMoviesById);
MoviesRoutes.post("/",AddMovie);
MoviesRoutes.put("/:id",UpdateMovie);
MoviesRoutes.delete("/:id", DeleteMovie);

module.exports = MoviesRoutes;