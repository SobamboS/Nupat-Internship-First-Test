// Importing packages
const express = require('express');
const app = express();



// Importing routes
const hello = require('./routes/hello');


// Adding routes
app.get('/feeds/autocomplete', hello);
app.get('/feeds/search', hello);
app.get('/feeds/list',hello);
app.get('/feeds/list-similarities',hello);
app.get('/tag/list',hello);
app.get('/categories/list',hello);
app.get('/reviews/list',hello);


//Middleware
app.use(express.json());

// Set port to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
