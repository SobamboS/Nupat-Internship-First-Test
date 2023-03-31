// Importing packages
const express = require('express');
const app = express();



// Importing routes
const hello = require('./routes/hello');


// Adding routes
app.use('/feed/autocomplete', hello);
app.use('/feed/search', hello);
app.use('/feed/list',hello);
app.use('/feed/list-similarities',hello);
app.use('/tag/list',hello);
app.use('/categories/list',hello);
app.use('/reviews/list',hello);

//Middleware
app.use(express.json());

// Set port to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
