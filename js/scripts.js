// UI Logic

$(function() {
  $('form#form').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputUser').val());



// Back-End Logic

var romanNumbers = ['I','V','X','L','C','D','M']
// var arabicNumbers = ['1','5','10','50','100','500','1000']

var convert = function(number, position) {
  if (number < 4 ) {

    return romanNumbers[position].repeat(number);


  } else if ( number === 4 ) {

    return romanNumbers[position] + romanNumbers[position + 1];

  } else if ( number === 5 ) {

    return romanNumbers[position + 1];


  } else if ( number < 9 ) {

    return romanNumbers[position + 1] +  romanNumbers[position].repeat(number -5);

  } else {

    return romanNumbers[position] + romanNumbers[position + 2];

  }

};


var arabicThousands = Math.floor(userInput / 1000);
var arabicHundreds = Math.floor((userInput - arabicThousands * 1000) / 100);
var arabicTens = Math.floor((userInput - (arabicThousands * 1000 + arabicHundreds * 100)) / 10);
var arabicOnes = Math.floor((userInput - (arabicThousands * 1000 + arabicHundreds * 100 + arabicTens * 10)) / 1);




var romanThousands = convert(arabicThousands, 6);
var romanHundreds = convert(arabicHundreds, 4);
var romanTens = convert(arabicTens, 2);
var romanOnes = convert(arabicOnes, 0);


var totalInputs = romanThousands + romanHundreds + romanTens + romanOnes;
$('#result#result').text(totalInputs);
  });
});
