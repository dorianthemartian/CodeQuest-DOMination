const quizData = [  
    {    
        question: "Which array method adds an element to the end of an array?",    
        options: ["push()", "pop()", "shift()", "unshift()"],    
        answer: 0 
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next");

// let currentQuestionIndex;
let currentQuestion = 0;
let score = 0;

// function showQuestion() {
// currentQuestion.options.forEach((option, index) => {  
//     const optionButton = document.createElement('button');  
//     optionButton.textContent = option;  
//     optionButton.addEventListener('click', () => selectOption(index));  
//     optionsContainer.appendChild(optionButton);});
// };
function showQuestion(question) {
    questionElement.innerText = question.question;
}
  
function nextQuestion() {
    console.log("Print Me");
  }

function selectAnswer() {

}

showQuestion(question);

nextButton.addEventListener("click", nextQuestion);



