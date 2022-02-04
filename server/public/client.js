$(document).ready(onReady);




function onReady() {
    console.log('jq js works');
    $('#equalsButton').on('click', calculate);
    $('#clearButton').on('click', clearButton);
}// end onReady

function calculate(){

}//end

function clearButton() {
    $('#numOne').val('');
    $('#numTwo').val('');
}// end clearButton