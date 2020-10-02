var buttonEl = document.querySelector("#start-quiz");
var quizQuestionEl = document.querySelector("#quiz-question");
var quizAnswersEl = document.querySelector("#quiz-answers");


//start the quiz event listener
buttonEl.addEventListener("click", function() {
    alert("Quiz is Starting!");
    quizQuestionEl.textContent = "Question 1";
    var answer1 = document.createElement("li");
    answer1.className = "option";
    answer1.textContent = "Option 1";
    quizAnswersEl.appendChild(answer1);
});

//populate Question function


//update Score function

//timer function