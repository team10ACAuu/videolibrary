//Proměnné
require('dotenv').config();

//Technologie
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {app.listen(process.env.PORT || 8080, ()=> {
    console.log(`App running on port ${process.env.PORT || 8080}...`)
})});

                                                              