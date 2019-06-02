// variable declarations
var text = 'aardvark';
var arr1 = text.split('');
var inputString = '';
var correctArr = [];
var count = 7;


//HTML element references
var inputEl = document.querySelector('[name="input"]');
var pEl = document.getElementById("usedletters");
var btnEl = document.getElementById("submit");
var wordEl = document.getElementById("word");
var textEl = 

//functions and stuff

function startGame() {
    //set text to
}


arr1.forEach(function(letter) {
    correctArr.push('_');
});
console.log(correctArr);


//var correctness
function correctness(str) {
    //start of check
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
    //end of check function
};
    //var I'mcorrectFunction

    //IncorrrectFunction



//create all event listeners (most stuff will be here)
btnEl.addEventListener("click", function(t) {    
    var textInput = inputEl.value;
    correctness(textInput)
    inputEl.value = '';
});
//any additional function to make it work

// addEventListener("")