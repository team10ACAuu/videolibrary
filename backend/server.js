//Proměnné
require('dotenv').config();

//Technologie
const express = require('express');
const mongoose = require('mongoose');
const videoRoutes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
  
// routes
app.use('/api', videoRoutes);

//Připojení k databázi.
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log ('Connected to db & listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
});

                                                              