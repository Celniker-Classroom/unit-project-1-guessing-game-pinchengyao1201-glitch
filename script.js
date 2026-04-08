// Game State
let answer = 0;
let guessCount = 0;
let totalGuess = 0;
let totalWins = 0;
let scores = [];

let playerName = prompt("Enter your name:");

// Play 
document.getElementById("playBtn").addEventListener("click", 
    function() {
        let range = 3;
        let radios = document.getElementsByName("level");
        for (let i=0; i < radios.length; i++){
            if(radios[i].checked){
                range = parseInt(radios[i].value);
            }
        }
        document.getElementById("guessBtn").disabled = false; 
        document.getElementById("giveUpBtn").disabled = false;
        document.getElementById("playBtn").disabled = true;
        document.getElementById("msg").textContent = playerName + ", guess a number between 1 and " + range;
        document.getElementById("guess").value = "";
        
        
        answer = Math.floor(Math.random() * range) + 1;
        for (let i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
        }
    }
);



//document.getElementById("msg")

document.getElementById("guessBtn").addEventListener("click", 
    function() {
        let input = parseInt(document.getElementById("guess").value);
        

        if (isNaN(input)) {
            document.getElementById("msg").textContent = "Please enter a valid number!";
            return;
        }

        guessCount ++;
        let diff = Math.abs(input - answer);

        if (input === answer){
            document.getElementById("msg").textContent = "Correct! " + playerName + "got it in " + guessCount + " guesses!";
    } 
        while (input != answer){
            if (diff < 2){ 
                temp = "hot"
            }
            else if (diff > 2 && diff < 5){
                temp = "warm"
            }
            else {
                temp = "hot"
            }

            if (input > answer) { 
                document.getElementById("msg").textContent = "Too High! You are " + temp;
            }
            if (input < answer) { 
                document.getElementById("msg").textContent = "Too Low! you are " + temp;
            }
        }
        
    updatescore(guessCount);
    resetButton();

})

function updateScore(score){
    totalWins ++;
    totalGuesses += score;

    document.getElementById("wins").textContent = "Total wins: " + totalWins;
    document.getElementById("avgScore").textContent = "Average Score: " + (totalGuesses/totalWins).toFixed(1);
}
