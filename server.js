require('dotenv').config();

const express = require('express');
const cors = require('cors');
const MoviesRoutes = require('./Routes/movies-routes');
const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use("/movies", MoviesRoutes)
app.use(cors());
app.get("/", (req, res) => {
    res.send({ massage: "server connected" })
});

app.listen(port,()=>{
    console.log("lissiom");
})