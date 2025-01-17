// button pressed by mouse

const drumButton = document.querySelectorAll(".drum").length

for (let i = 0; i < drumButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var innerHTML = this.innerHTML;
        makeSound(innerHTML); 
         // adding aniamtion function
        animation(innerHTML) ; 
    });
}


// key pressed by keyboard

document.addEventListener("keydown", function (event) {

   
    makeSound(event.key);
    // adding aniamtion function
    animation(event.key);  

})
    

function makeSound(keyPressed) {
    switch (keyPressed) {
        case "w":
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;

        case "a":
            var audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;

        case "s":
            var audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;

        case "d":
            var audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(buttonInnerhtml);
            break;
    }
}

// adding animation to key
function animation(currentKey){
    var pressedButton = document.querySelector("."+currentKey);
    // Adding "pressed" class form css file.
    pressedButton.classList.add("pressed");     

    setTimeout(function (){
        pressedButton.classList.remove("pressed");
    }, 100);

}