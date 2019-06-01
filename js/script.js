// variable declarations
var text = 'aardvark';
var arr1 = text.split('');
var inputString = '';
var correctArr = [];
var count = 7;


//HTML element references
var inputEl = document.querySelector('[name="input"]');
var pEl = document.getElementById("usedletters");
var btnEl = document.querySelector("button");
var wordEl = document.getElementById("word");

//functions
//var correctness
function correctness(str) {
    var textInput = inputEl.value;
    var rightLetter = '';
    for (var i = 0; i < str.length; i++) {
        if (arr1.includes(str[i]) ) {
            //a function for changing a dash to a letter
            rightLetter += str[i];
            wordEl.textContent =  rightLetter;
        } else {
            count = count - 1;
            inputString = inputString + "  " + textInput;
            pEl.textContent = inputString;
        }
        return rightLetter
    };
};
    //var I'mcorrectFunction

    //IncorrrectFunction



//create all event listeners (most stuff will be here)
btnEl.addEventListener("click", function(t) {    
    var textInput = inputEl.value;
    correctness(textInput)
    //next line is part of incorrect
    //do me no matter what
    inputEl.value = '';
});
//any additional function to make it work

// var arr2 = [];

// arr1.forEach(function (letter) {
//     // arr2.push("_");
        

// });

// console.log(arr2);
//make a switch for images + count!