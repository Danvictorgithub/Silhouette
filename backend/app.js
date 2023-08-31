require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const helmet = require('helmet');
const cors = require("cors");

const port = 3000;
const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => res.json({message: "Hello World"}));


app.listen(port,() => {
    console.log(`Listening to port ${port}`)
})