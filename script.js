var myStartButton = document.querySelector(".start-btn");

var answerButtons = document.querySelectorAll(".answer-btns");

var titleScreen = document.querySelector(".title-screen");

var firstQuestion = document.querySelector(".question-1");

var secondQuestion = document.querySelector(".question-2");

var thirdQuestion = document.querySelector(".question-3");

var resultScreen = document.querySelector(".result-screen");


var currentQuestionNumber = 1;

console.log(currentQuestionNumber);

function myFunction() {

  titleScreen.style.display = "none";
  firstQuestion.style.display = "block";

}

function answerClicked(event) {
  currentQuestionNumber++;

  alert(event.target.textContent);

  if (currentQuestionNumber == 1) {
    firstQuestion.style.display = "block";

  } else if (currentQuestionNumber == 2) {
    secondQuestion.style.display = "block";
    firstQuestion.style.display = "none";
  } else if (currentQuestionNumber == 3) {
    thirdQuestion.style.display = "block";
    secondQuestion.style.display = 'none';
    firstQuestion.style.display = "none";
  } else {
    thirdQuestion.style.display = "none";
    secondQuestion.style.display = 'none';
    firstQuestion.style.display = "none";

    resultScreen.style.display = "block";
  }

  console.log(currentQuestionNumber);
}


// add event listener to all answer buttons
for (let index = 0; index < answerButtons.length; index++) {
  answerButtons[index].addEventListener("click", answerClicked)
}

// event listener for start button
myStartButton.addEventListener("click", myFunction)