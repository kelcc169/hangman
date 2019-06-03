// variable declarations
var text = '';
var arr1 = [];
var inputString = '';
var correctArr = [];
var count = 7;


//HTML element references
var inputEl = document.querySelector('[name="input"]');
var textEl = document.querySelector('[name="start"]');
var pEl = document.getElementById("usedletters");
var wordEl = document.getElementById("word");
var btnEl = document.getElementById("submit");
var startEl = document.getElementById("start");

//functions and stuff

function startGame() {
    //set text to the inputText from the game
    text = textEl.value;
    correctArr = [];
    arr1 = text.split('');
    arr1.forEach(function(letter) {
        correctArr.push('_');
    });
    console.log(correctArr);
    //display carrectArr in box
    wordEl.textContent = correctArr.join('   ');
    //set count to 7
    count = 7;
    //set inputEl.textContent to an empty array
    textEl.value = '';
    pEl.value = [];
}

//var correctness
function correctness(str) {
        if (arr1.includes(str)) {    
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] === str) {
                correctArr[i] = str;
                wordEl.textContent =  correctArr.join('   ');
                }
            }
        } else {
            count = count - 1;
            if (count === 0) {
                console.log("you lose")
            }
            inputString = inputString + "    " + str;
            pEl.textContent = inputString;
        };
};

function hangman() {
    //if !correctArr.includes('_'), you win!
    //or else, if count reaches 0 you lose!
    // for pictures, access based on count?
}
//create all event listeners (most stuff will be here)
btnEl.addEventListener("click", function(t) {    
    var textInput = inputEl.value;
    correctness(textInput)
    inputEl.value = '';
});

startEl.addEventListener("click", startGame);
//any additional function to make it work

// addEventListener("")