let start = document.getElementById("start")
let questionAndAnswerBox = document.getElementById("questions-answers")
let nextQuestion = document.getElementById("next")

start.addEventListener("click", playQuiz)

function playQuiz(){
    start.classList.add("hidden")
    questionAndAnswerBox.classList.remove("hidden")
    nextQuestion.classList.remove("hidden")
}