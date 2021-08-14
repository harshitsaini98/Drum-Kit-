// code part for detecting button press

var numberofElement = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofElement; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);                                   //  here if w is press using mouse button then it convert using this.innerHTML

    });

}

// code part for detecting keyboard press 

document.addEventListener("keydown", function (event) {
     makeSound(event.key);                                     // if w is press using a keyboard presss then it detect using 
     buttonAnimation(event.key);                                                           // using a event.key
    
})

function makeSound(key)
{

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;


        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:   console.log(buttonInnerHTML)
            
    }
} 


function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function ( ) {
        activeButton.classList.remove("pressed");
        
    }, 100);



}

