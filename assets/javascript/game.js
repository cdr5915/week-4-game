
var wins = 0;
var losses = 0;
var totalScore = 0;
var cupcakeNums = [];
var counter = 0;
var computerNum = 0;

var resetGame = function () {
    counter = 0;
    $("#sum").html(counter);
    computerNum = Math.floor(Math.random() * ((120-19) + 1) + 19);
    $("#comp-number").html(computerNum);
    console.log(computerNum);
   for (var i = 0; i<4; i++) {
    cupcakeNums[i] = Math.floor(Math.random() * ((12-1) + 1) + 1);
    console.log(i + " random number: " + cupcakeNums[i]);

    //assigning random num to each cupcake by ID
    $("#cupcake-" + i ).attr("data-cupcakevalue", cupcakeNums[i]);
    }
}

$(document).ready(function() {

    //setting computer's number
    computerNum = Math.floor(Math.random() * ((120-19) + 1) + 19);
    console.log("Computer number :" + computerNum);
    $("#comp-number").html(computerNum);

    //making array of random numbers for cupcakes
    for (var i = 0; i<4; i++) {
    cupcakeNums[i] = Math.floor(Math.random() * ((12-1) + 1) + 1);
    console.log(i + " random number: " + cupcakeNums[i]);

    //assigning random num to each cupcake by ID
    $("#cupcake-" + i ).attr("data-cupcakevalue", cupcakeNums[i]);
    }


    //Extracting the cupcake value of the clicked cupcake and converting to integer.
    $(".cupcake-button").on("click", function(){
        var cupcakeValue = ($(this).attr("data-cupcakevalue"));
        cupcakeValue = parseInt(cupcakeValue);
        console.log("cupcake value: " + cupcakeValue);

        //Add new value of click to counter variable
        counter += cupcakeValue;

        console.log("New score: " + counter);
        //Displaying sum of clicks 
        $("#sum").html(counter);

        if(counter === computerNum) {
            alert("You win!");
            wins++
            console.log("wins: " + wins);
            $("#wins").html("Wins: "+ wins);
            resetGame();
        }

        else if (counter >= computerNum) {
            alert("You lose!");
            losses++
            console.log("losses: " + losses);
            $("#losses").html("Losses: "+ losses);
            resetGame();

        }


    });

});

