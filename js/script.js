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
var sadEl = document.getElementById("sadface");
var nooseEl = document.getElementById("noose");


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
    sadEl.textContent = ":(";
    sadEl.style.color = "transparent";
    nooseEl.style.border = "";
    textEl.value = '';
    inputString= '';
    pEl.textContent = '';
}

function checkCorrect(str) {
    if (pEl.textContent.includes(str)) {
        return
    } else {
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
                sadEl.style.color = "black"
                pEl.textContent = "You Lose!";
                wordEl.textContent = text;
            } else {
            document.getElementById(parts[count - 1]).style.border = "1px solid black";
            inputString = inputString + "    " + str;
            pEl.textContent = inputString;
            }
        };
    }
};

function win () {
    if (correctArr.join('') === text) {
        parts.forEach(function(part) {
            document.getElementById(part).style.border = "1px solid black";
        });
        nooseEl.style.border = "transparent";
        sadEl.textContent = ":D";
        sadEl.style.color = "black";
        pEl.textContent = "You Win!";
    }
};


btnEl.addEventListener("click", function(t) {    
    var textInput = inputEl.value;
    checkCorrect(textInput)
    inputEl.value = '';
    win();
});

startEl.addEventListener("click", startGame);

