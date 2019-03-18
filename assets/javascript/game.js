window.onload = function () {

    // variables
    var guesses = document.getElementById("guess");
    var tries = 9;
    var wins = 0;
    var losses = 0;
    var myGuesses = new Set();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randLetter = randLetter;


    // generate a random letter
    randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    // function play
    function play(event) {
        var newG = document.createElement("span");
        if (!(event.keyCode <= 90 && event.keyCode >= 65)) {
            return;
        } else if (!myGuesses.has(event.key)) {
            myGuesses.add(event.key);
            newG.textContent = event.key + ", ";
            guesses.appendChild(newG);
            tries--;
            document.getElementById("tries").innerHTML = tries;
        }
    }

    // initialize game 
    function initialize() {
        // generate a random letter
        randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        myGuesses.clear();
        tries = 9;
        document.getElementById("tries").innerHTML = tries;
        document.getElementById("guess").innerHTML = "";
    }

    // function winning
    function winning() {
        wins++;
        document.getElementById("win").innerHTML = wins;
    }

    // function losing
    function losing() {
        losses++;
        document.getElementById("lose").innerHTML = losses;
    }

    // when key pressed game starts.
    document.onkeyup = function (event) {
        if (event.key == randLetter) {
            winning();
            initialize();
        } else if (tries <= 0) {
            losing();
            initialize();
        }
        play(event);



    }
}