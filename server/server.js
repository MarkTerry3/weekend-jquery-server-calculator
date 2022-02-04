//require express
//gives us a function
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

// express static file serving
// folder name is server/public
app.use(express.static('server/public'));






























// standard practice to have this app.listen at the bottom of the file
// start up server
app.listen(port, function() {
    console.log('Listening on Port', port);
    
});