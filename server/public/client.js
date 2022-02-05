$(document).ready(onReady);




function onReady() {
    console.log('jq js works');
    $('#equalsButton').on('click', postNumbers);
    $('#clearButton').on('click', clearButton);
    $('#plusButton').on('click', operatorButtonClick);
    $('#minusButton').on('click', operatorButtonClick);
    $('#timesButton').on('click', operatorButtonClick);
    $('#divideButton').on('click', operatorButtonClick);
}// end onReady

let choosenOperator;

function postNumbers() {
            //get quotes from the server using AJAX
            $.ajax({
                method: 'POST', //STANDARD TO CAPITALIZE
                url: '/numbers',
                data: {
                    numberInputs: {
                        numOne: $('#numOne').val(),
                        operator: choosenOperator,
                        numTwo: $('#numTwo').val(),
                        answer: ''
                    }
                }
            }).then(function(response) {
                // .then() is asynchronous, thats why we wait for the GET and put .then after
                //standard practice to put response in the parameters
                console.log('great success, in postNumbers', response);
                //to do , append quotes to dom
                // renderToDom(response);
            }) .catch(function(response) {
                //if the server sends an error, what will we do with that situation? - 
                console.log('ope no luck, in postNumbers', response);
            }) 
}// end getNumbers

function getNumbers() {
            //get quotes from the server using AJAX
            $.ajax({
                method: 'GET', //STANDARD TO CAPITALIZE
                url: '/numbersAnswer',
            }).then(function(response) {
                // .then() is asynchronous, thats why we wait for the GET and put .then after
                //standard practice to put response in the parameters
                console.log('great success, in numbersAnswer', response);
                //to do , append quotes to dom
                renderToDom(response);
            }) .catch(function(response) {
                //if the server sends an error, what will we do with that situation? - 
                console.log('ope no luck, in numbersAnswer', response);
            }) 
}// end getNumbers





function operatorButtonClick(params) {
    console.log('in operatorButtonClick');
// sets choosenOperastor to eqaul the name of the id of whatever they clicked on
    choosenOperator = $(this).attr("id")
    console.log($(this).attr("id"));
    
    
}// end operatorButtonClick


function renderToDom(inputsArray) {
    for (let i = 0; i < inputsArray.length; i++) {
        $('#answerOutput').append(`<li>${inputsArray.numOne} ${inputsArray.operator} ${inputsArray.numTwo} ${inputsArray.answer}</li>`)
        
    }
    // append to a ul
    
}// end renderToDom








function clearButton() {
    $('#numOne').val('');
    $('#numTwo').val('');
}// end clearButton