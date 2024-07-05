let questions = [
    {
        question : "How many open play goals did France score in their first 4 matches of the tournament?",
        answer : [
            {text : "3", result : false},
            {text : "1", result : false},
            {text : "3", result : false},
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
        question : "Who assisted Jude Bellinghams 95th minute equaliser to keep England in the Euros?",
        answer : [
            {text : "Marc Guehi", result : true},
            {text : "Harry Kane", result : false},
            {text : "Phil Foden", result : false},
            {text : "Declan Rice", result : false}
        ]
    },
    {
        question : "How many open play goals were scored in the group stages?",
        answer : [
            {text : "90", result : false},
            {text : "86", result : true},
            {text : "74", result : false},
            {text : "69", result : false}
        ]
    }
]

let start = document.getElementById("start")
let questionAndAnswerBox = document.getElementById("questions-answers")
let nextQuestion = document.getElementById("next")

start.addEventListener("click", playQuiz)

function playQuiz(){
    start.classList.add("hidden")
    questionAndAnswerBox.classList.remove("hidden")
    nextQuestion.classList.remove("hidden")
}