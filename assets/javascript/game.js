var wins = 0;
var losses = 0;
var totalScore = 0;
var randomCupcakeNum1 = 0;
var randomCupcakeNum2 = 0;
var randomCupcakeNum3 = 0;
var randomCupcakeNum4 = 0;

$(document).ready(function(){
var computerNum = Math.floor(Math.random() * ((120-19) + 1) + 19);
console.log("Computer number :" + computerNum);
$("#comp-number").html(computerNum);



$("#cupcake-1").on("click", function(){
	if (randomCupcakeNum1 === 0) {
    randomCupcakeNum1 = Math.floor(Math.random() * ((12-1) +1) + 1);
    console.log("button number 1: " + randomCupcakeNum1);}
    $("#sum-numbers-box").html(randomCupcakeNum1);
});


$("#cupcake-2").on("click", function(){
	if (randomCupcakeNum2 === 0) {
    randomCupcakeNum2 = Math.floor(Math.random() * ((12-1) +1) + 1);
    console.log("button number 2: " + randomCupcakeNum2);}
    $("#sum-numbers-box").html(randomCupcakeNum2);
});


$("#cupcake-3").on("click", function(){
	if (randomCupcakeNum3 === 0) {
    randomCupcakeNum3 = Math.floor(Math.random() * ((12-1) +1) + 1);
    console.log("button number 3: " + randomCupcakeNum3);}
    $("#sum-numbers-box").html(randomCupcakeNum3);
});


$("#cupcake-4").on("click", function(){
	if (randomCupcakeNum4 === 0) {
    randomCupcakeNum4 = Math.floor(Math.random() * ((12-1) +1) + 1);
    console.log("button number 4: " + randomCupcakeNum4);}
    $("#sum-numbers-box").html(randomCupcakeNum4);
});

});