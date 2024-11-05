document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("Submitted!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);

            }
        })
    }
});

/**
 * The main game "loop" called when the script is first loaded and after the user's answer has been processed.
 */

function runGame(){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}

function displayMultiplicationQuestion() {

}

function displayDivisionQuestion() {

}
