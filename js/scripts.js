// UI Logic

$(function() {
  $('form#form').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputUser').val());


    var romanNumbers = ['I','V','X','L','C','D','M']
    var arabicNumbers = ['1','5','10','50','100','500','1000']

// Back-End Logic

var convert = function(number, position) {
  if (number < 4 ) {

    alert(romanNumbers[position].repeat(number));

  } else if ( number === 4 ) {

    alert(romanNumbers[position] + romanNumbers[position + 1]);

  } else if ( number === 5 ) {

    alert( romanNumbers[number] );


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
  });
});
