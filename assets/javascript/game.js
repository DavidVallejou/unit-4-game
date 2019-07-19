// Game starts with a random number result
//Each crystal when clicked generates a random number
//Click each crystal until it equals to random number result
// If you equal the number "You win" 
// If you go over the number "You lose"

var randomNum = [8,2,9,4]
var win;
var loss;
var total;

$(document).ready(function() {
  
for (var i = 0; i < randomNum; i++) {
  
  var total = Math.floor(Math.random) *12;



}
$(".button-1").on("click", function() {
  counter++
});
$(".button-2").on("click", function() {
  counter++
});
$(".button-3").on("click", function() {
  counter++
});
$(".button-4").on("click", function() {
  counter++
});

if(randomNum > total) {
  loss;
  $(".loss").html(loss);
}

else if(randomNum == total) {
  win++;
  $(".win").html(win);
}


