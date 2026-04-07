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
        let radios = document.getElementsByName("level");
        let range = 3; 
        document.getElementById("guessBtn").disabled = false; 
        document.getElementById("giveUpBtn").disabled = false;
        document.getElementById("playBtn").disabled = true;
        document.getElementById("msg").textContent = playerName + ", guess a number between 1 and " + range;
        document.getElementById("guess").value = "";
        
        for (let i=0; i < radios.length; i++);{
            if(radios[i].checked){
                range = parseInt(radios[i].value);
            }
        }
        answer = Math.floor(Math.random() * range) + 1;
        for (let i = 0; i < radios.length; i++) {
            radios[i].disabled = true;
        }
    }
);



//document.getElementById("msg")

document.getElementById("guessBtn").addEventListener("click", 
    function() {
        guess = document.getElementById("guess").textContent;
        
    }
)