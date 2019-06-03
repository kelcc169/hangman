var text = '';
var arr1 = [];
var inputString = '';
var correctArr = [];
var count = 7;
var parts = ['rightleg', 'leftleg', 'rightarm', 'leftarm', 'body', 'head']

var inputEl = document.querySelector('[name="input"]');
var textEl = document.querySelector('[name="start"]');
var pEl = document.getElementById("usedletters");
var wordEl = document.getElementById("word");
var btnEl = document.getElementById("submit");
var startEl = document.getElementById("start");


function startGame() {
    text = textEl.value;
    correctArr = [];
    arr1 = text.split('');
    arr1.forEach(function(letter) {
        correctArr.push('_');
    });
    wordEl.textContent = correctArr.join('   ');
    count = 7; 
    parts.forEach(function (part) {
        document.getElementById(part).style.border = "transparent";
    });
    textEl.value = '';
    pEl.textContent = [];
    document.getElementById("sadface").innerHTML = ":(";
    document.getElementById("sadface").style.color = "transparent";
}

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
            document.getElementById("sadface").style.color = "black"
            wordEl.textContent = "You Lose!";
        } else {
        document.getElementById(parts[count - 1]).style.border = "1px solid black";
        inputString = inputString + "    " + str;
        pEl.textContent = inputString;
        }
    };
};

btnEl.addEventListener("click", function(t) {    
    var textInput = inputEl.value;
    correctness(textInput)
    inputEl.value = '';
    if (correctArr.join('') === text) {
        parts.forEach(function(part) {
            document.getElementById(part).style.border = "1px solid black";
        });
        document.getElementById("noose").style.border = "transparent";
        document.getElementById("sadface").innerHTML = ":D";
        document.getElementById("sadface").style.color = "black";
        pEl.textContent = "You Win!";
    }
});

startEl.addEventListener("click", startGame);
