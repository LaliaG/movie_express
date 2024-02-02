const express = require('express');
const app = express();
require('./config/db');
const movieRoutes = require('./routes/movieRoutes');


app.use('/api/movies', movieRoutes);



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${Port}.`);

});







