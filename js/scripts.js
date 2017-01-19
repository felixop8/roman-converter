// UI Logic

$(function() {
  $('form#form').submit(function(event) {
    event.preventDefault();
    var numeralNumber = $('input#inputUser').val();
    var result = addFunction(numeralNumber);
    $('#result h3').text(result);

    });
});



// Back-End Logic
var romanNumerals = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};


var addFunction = function(parameter1, parameter2) {
  return parameter1 + parameter2
};
