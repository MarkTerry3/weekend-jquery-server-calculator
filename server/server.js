//require express
//gives us a function
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({extended: true}));


let inputsArray = [];

// express static file serving
// folder name is server/public
app.use(express.static('server/public'));

app.post('/numbers', function (req, res) {
    console.log('request at /numbers was made', req);
    let newEquation = req.body.numberInputs;

    x = Number(req.body.numberInputs.numOne);
    y = Number(req.body.numberInputs.numTwo);
    z = req.body.numberInputs.operator;
    let answer = compute(x, y, z);

    req.body.numberInputs['answer'] = answer;

    inputsArray.push(newEquation);
    console.log(newEquation);
    res.send(200);
 });

let answer = 0;

function compute(x, y, z) {

    if (z === 'plusButton') {
        answer = (x + y);
        return answer;
    }else if (z === 'minusButton') {
        answer = (x - y);
        return answer;
    }else if (z === 'timesButton') {
        answer = (x * y);
        return answer;
    }else if (z === 'divideButton') {
        answer = (x / y);
        return answer;
    }
    else {
        console.log('Somethings not working');
        
    }
}// end compute


app.get('/numbersAnswer', function (req, res) {
    console.log('request at /numbersAnswer was made', req);
     res.send(inputsArray);
 });
























// standard practice to have this app.listen at the bottom of the file
// start up server
app.listen(port, function() {
    console.log('Listening on Port', port);
    
});