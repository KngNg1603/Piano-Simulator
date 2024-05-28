// Detecting button press

var buttonList =  document.querySelectorAll(".piano, .sub-key");

for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        
    });
};
   
// Detecting keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound (key) {
        
    switch (key) {
        case "Tab":
            var c3 = new Audio("./sounds/piano-mp3/C3.mp3");
            c3.play();
            break;
        case "1":
            var db3 = new Audio("./sounds/piano-mp3/Db3.mp3");
            db3.play();
            break;
        case "q":
            var d3 = new Audio("./sounds/piano-mp3/D3.mp3");
            d3.play();
            break;
        case "2":
            var eb3 = new Audio("./sounds/piano-mp3/Eb3.mp3");
            eb3.play();
            break;
        case "w":
            var e3 = new Audio("./sounds/piano-mp3/E3.mp3");
            e3.play();
            break;
        case "e":
            var f3 = new Audio("./sounds/piano-mp3/F3.mp3");
            f3.play();
            break;
        case "4":
            var gb3 = new Audio("./sounds/piano-mp3/Gb3.mp3");
            gb3.play();
            break;
        case "r":
            var g3 = new Audio("./sounds/piano-mp3/G3.mp3");
            g3.play();
            break;
        case "5":
            var ab3 = new Audio("./sounds/piano-mp3/Ab3.mp3");
            ab3.play();
            break;
        case "t":
            var a3 = new Audio("./sounds/piano-mp3/A3.mp3");
            a3.play();
            break;
        case "6":
            var bb3 = new Audio("./sounds/piano-mp3/Bb3.mp3");
            bb3.play();
            break;
        case "y":
            var b3 = new Audio("./sounds/piano-mp3/B3.mp3");
            b3.play();
            break;
        case "u":
            var c4 = new Audio("./sounds/piano-mp3/C4.mp3");
            c4.play();
            break;
        case "8":
            var db4 = new Audio("./sounds/piano-mp3/Db4.mp3");
            db4.play();
            break;
        case "i":
            var d4 = new Audio("./sounds/piano-mp3/D4.mp3");
            d4.play();
            break;
        case "9":
            var eb4 = new Audio("./sounds/piano-mp3/Eb4.mp3");
            eb4.play();
            break;
        case "o":
            var e4 = new Audio("./sounds/piano-mp3/E4.mp3");
            e4.play();
            break;
        case "p":
            var f4 = new Audio("./sounds/piano-mp3/F4.mp3");
            f4.play();
            break;
        case "-":
            var gb4 = new Audio("./sounds/piano-mp3/Gb4.mp3");
            gb4.play();
            break;
        case "[":
            var g4 = new Audio("./sounds/piano-mp3/G4.mp3");
            g4.play();
            break;
        case "=":
            var ab4 = new Audio("./sounds/piano-mp3/Ab4.mp3");
            ab4.play();
            break;
        case "]":
            var a4 = new Audio("./sounds/piano-mp3/A4.mp3");
            a4.play();
            break;
        case "Backspace":
            var bb4 = new Audio("./sounds/piano-mp3/Bb4.mp3");
            bb4.play();
            break;
        case "\\":
            var b4 = new Audio("./sounds/piano-mp3/B4.mp3");
            b4.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
};

var keyToClass = {
    "Tab": "tab",
    "[": "ob",
    "]": "cb",
    "\\": "bs",
    "1": "one",
    "2": "two",
    "4": "four",
    "5": "five",
    "6": "six",
    "8": "eight",
    "9": "nine",
    "-": "sub",
    "=": "equal",
    "Backspace": "back-space",  
};

function buttonAnimation (pressKey) {
    var className = keyToClass[pressKey] || pressKey;
    var activeButton = document.querySelector("." + className);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
};