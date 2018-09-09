

//OC READY AND CLICK ALERTS-------------------------->
//THIS WENT OUT THE WINDOW WHEN I DECIDED TO CREATE A 
//CRYSTAL TO MATCH A VALUE, AS OPPOSED TO MATCH A VALUE 
//TO AN EXISTING CRYSTAL
$(document).ready(function(){
$("#purple_crystal").on("click", function() {
    alert("Purple Crystal Clicked!");
});

$("#yellow_crystal").on("click", function() {
    alert("Yellow Crystal Clicked!");
});

$("#red_crystal").on("click", function() {
    alert("Red Crystal Clicked!");
});

$("#green_crystal").on("click", function() {
    alert("Green Crystal Clicked!");
});

//SECRET NUMBER TO GUESS----------------------------->
var targetNumber = Math.floor((Math.random() * 50) + 1);
//NUMBER TO GUESS MOVES TO HTML/TEXT----------------->
$("#number-to-guess").text(targetNumber);


//CLICK COUNTER-------------------------------------->
var counter = 0;

var numberOptions = [10, 5, 2, 7];

for (var i = 0; i < numberOptions.length; i++ ) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystals");
    imageCrystal.attr("src", "./assets/images/purple_crystal.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  
}


  var numberOptions = [10, 11];
  var increment = numberOptions[Math.round(Math.random())];

$(".crystals").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("Your new score is "+ counter);


//GAME STATUS---------------------------------------->
if (counter === targetNumber) {
    alert("You Win!");
}
else if (counter >= targetNumber) {
    alert("You Lose!");
}
});

});





















