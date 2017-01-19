// UI Logic

$(function() {
  $('form#form').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputUser').val());





    var romanNumbers = ['I','V','X','L','C','D','M']
    var arabicNumbers = ['1','5','10','50','100','500','1000']

// Back-End Logic

var convert = function(number, position) {
  if (value < 4 ) { romanNumbers[6].repeat(2)  }
})





var arabicThousands = Math.floor(userInput / 1000);
alert(arabicThousands);
var arabicHundreds = Math.floor((userInput - arabicThousands * 1000) / 100);
alert(arabicHundreds);
var arabicTens = Math.floor((userInput - (arabicThousands * 1000 + arabicHundreds * 100)) / 10);
alert(arabicTens);
var arabicOnes = Math.floor((userInput - (arabicThousands * 1000 + arabicHundreds * 100 + arabicTens * 10)) / 1);
alert(arabicOnes);


// var romanThousands = convert(arabicThousands, romanNumbers[6])
// var romanHundreds =
// var romanTens =
// var romanOnes =
  });
});
