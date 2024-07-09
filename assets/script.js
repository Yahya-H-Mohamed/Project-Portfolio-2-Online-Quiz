let questions = [
    {
        question : "How many open play goals did France score in their first 4 matches of the tournament?",
        answer : [
            {text : "3", result : false},
            {text : "1", result : false},
            {text : "5", result : false},
            {text : "0", result : true}
        ]
    },
    {
        question : "Which Portuguese player missed their penalty in the shootout causing them to crash out of the quarter finals?",
        answer : [
            {text : "Cristiano Ronaldo", result : false},
            {text : "Joao Felix", result : true},
            {text : "Bruno Fernades", result : false},
            {text : "Bernado Silva", result : false}
        ]
    },
    {
        question : "Who is the youngest player at the tournament?",
        answer : [
            {text : "Nico Williams", result : false},
            {text : "Kobbie Mainoo", result : false},
            {text : "Jude Bellingham", result : false},
            {text : "Lamine Yamal", result : true}
        ]
    },
    {
        question : "Who assisted Jude Bellingham's 95th minute equaliser to keep England in the Euros?",
        answer : [
            {text : "Marc Guehi", result : true},
            {text : "Harry Kane", result : false},
            {text : "Phil Foden", result : false},
            {text : "Declan Rice", result : false}
        ]
    },
    {
        question : "How many goals were scored in the group stages?",
        answer : [
            {text : "90", result : false},
            {text : "86", result : true},
            {text : "74", result : false},
            {text : "69", result : false}
        ]
    },
    {
        question : null,
        answer : [
            {text : null, result : null},
            {text : null, result : null},
            {text : null, result : null},
            {text : null, result : null}
        ]
    }
]

let start = document.getElementById("start")
let questionBox = document.getElementById("question-box")
let questionAndAnswerBox = document.getElementById("questions-answers")
let question = document.getElementById("question")
let answerBoxes = document.getElementsByClassName("answer")
let nextQuestion = document.getElementById("next")
let TryAgainButton = document.getElementById("restart")
let scoreText = document.getElementById("scoreText")
let currentQuestion = 0
let currentScore = 0

start.addEventListener("click", playQuiz)

function playQuiz(){
    start.classList.add("hidden")
    questionAndAnswerBox.classList.remove("hidden")
    generateQuestions()
}

function generateQuestions() {
    question.innerHTML = questions[currentQuestion].question

    for (let i = 0; i < answerBoxes.length; i++){
        answerBoxes[i].innerHTML = questions[currentQuestion].answer[i].text
        if (questions[currentQuestion].answer[i].result){
            answerBoxes[i].dataset.correct = "correct"
        }
    }

    for (let i = 0; i < answerBoxes.length; i++){
        answerBoxes[i].addEventListener("click", clickAnswer)
    }
}

nextQuestion.addEventListener("click", moveToNextQuestion)

function moveToNextQuestion(){
    reset()
    currentQuestion++
    generateQuestions()
    if (currentQuestion > 4){
        showScore()
    }
}

function clickAnswer(button){
    nextQuestion.classList.remove("hidden")
    for (let i = 0; i < answerBoxes.length; i++){
        answerBoxes[i].style.pointerEvents = "none" 
    }
    
    if (button.target.dataset.correct){
        button.target.classList.add("correct")
        currentScore++
    } else{
        button.target.classList.add("incorrect")
    }
   
}

function reset(){
    nextQuestion.classList.add("hidden")
    for (let i = 0; i < answerBoxes.length; i++){
        answerBoxes[i].classList.remove("correct")
        answerBoxes[i].classList.remove("incorrect")
        delete answerBoxes[i].dataset.correct
        answerBoxes[i].style.pointerEvents = "" 
    }
}

function showScore(){
    for (let i = 0; i < answerBoxes.length; i++){
        answerBoxes[i].classList.add("hidden")
    }
    question.innerHTML = `You got ${currentScore} out of 5 questions correct!`

    switch(currentScore){
        case 5:
            scoreText.textContent = "Perfect! Looks like someones been keeping up with the Euros";
            break;
        case 4:
            scoreText.textContent = "So close! I can tell you know ball";
            break;
        case 3:
            scoreText.textContent = "Not Bad. Atleast you know something";
            break;
        case 2:
            scoreText.textContent = "You probably have better things to do...";
            break;
        case 1:
            scoreText.textContent = "Look on the bright side, it could have been worse";
            break;
        default:
            scoreText.textContent = "It's not coming home for you..."
    }

    TryAgainButton.classList.remove("hidden")
}

TryAgainButton.addEventListener("click", resetQuiz)

function resetQuiz(){
    currentQuestion = 0
    currentScore = 0
    scoreText.innerHTML = ""
    TryAgainButton.classList.add("hidden")

    for (let i = 0; i < answerBoxes.length; i++){
        answerBoxes[i].classList.remove("hidden")
    }
    
    playQuiz()
}