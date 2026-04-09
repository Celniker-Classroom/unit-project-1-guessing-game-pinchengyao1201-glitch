function updateScore(score){
    totalWins ++;
    totalGuess += score;

    document.getElementById("wins").textContent = "Total wins: " + totalWins;
    document.getElementById("avgScore").textContent = "Average Score: " + (totalGuess/totalWins).toFixed(1);
    scores.push(score)
    scores.sort((a, b) => a - b)
    document.getElementById("first").textContent = scores[0]
    document.getElementById("second").textContent = scores[1]
    document.getElementById("third").textContent = scores[2]
    

}

// Game State
let answer = 0;
let guessCount = 0;
let totalGuess = 0;
let totalWins = 0;
let scores = [];
let totalTime = 0;
let startTime = 0;
let fastestTime = Infinity;

let playerName = prompt("Enter your name:");
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();

// Play 
document.getElementById("playBtn").addEventListener("click", 
    function() {
        startTime = new Date().getTime();
        guessCount = 0
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
            document.getElementById("msg").textContent = "Correct! " + playerName + ", you got it in " + guessCount + " guesses!";
            document.getElementById("guessBtn").disabled = true;
            updateScore(guessCount);
            let radios = document.getElementsByName("level");
            for (let i = 0; i < radios.length; i++) {
                radios[i].disabled = false;
            }
            document.getElementById('playBtn').disabled = false
            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000;
            if (timeTaken < fastestTime) {
                fastestTime = timeTaken;
                document.getElementById("fastest").textContent = "Fastest Game: " + fastestTime.toFixed(2) + " seconds";
            }
            totalTime += timeTaken;
            document.getElementById("avgTime").textContent = "Average Time: " + (totalTime/totalWins).toFixed(2) + " seconds";
            return;
        } 
        if (diff <= 2){ 
            temp = "hot"
        } else if (diff > 2 && diff <= 5){
            temp = "warm"
        } else {
            temp = "cold"
        }
        if (input > answer) { 
            document.getElementById("msg").textContent = "Too High! You are " + temp;
        }
        else if (input < answer) { 
           document.getElementById("msg").textContent = "Too Low! you are " + temp;
        }
    }
)

//Give up Button
document.getElementById('giveUpBtn').addEventListener("click",
    function() {
        updateScore(guessCount);
        let radios = document.getElementsByName("level");
        guessCount = 0
        document.getElementById("guessBtn").disabled = true; 
        document.getElementById("giveUpBtn").disabled = true;
        document.getElementById("playBtn").disabled = false;
        document.getElementById("msg").textContent = "Select a Level"
        document.getElementById("guess").textContent = " "
        for (let i = 0; i < radios.length; i++) {
            radios[i].disabled = false;
        }
    }
)

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }

    const lastDigit = day % 10;
    if (lastDigit === 1) return "st";
    if (lastDigit === 2) return "nd";
    if (lastDigit === 3) return "rd";
    return "th";
}

function updateDate() {
    const today = new Date();
    const month = monthNames[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    const seconds = today.getSeconds();

    document.getElementById("date").textContent = month + " " + day + getDaySuffix(day) + ", " + year + ", " + seconds + " seconds";
}
setInterval(updateDate, 1000);
updateDate()