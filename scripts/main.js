const questions=[
    {
        question: "How long do you exercise every day?",
        answers: [
            {text:"A. 0-10min",value:-1,suggestion:"You should exercise more"},
            {text:"B. 10-30min",value:-0.5,suggestion:"You should exercise more"},
            {text:"C. 30min+",value:0,suggestion:"Your daily exercise is up to standard, please keep it up!"}
        ]
    },
    {
        question: "Which of the following is your daily diet?",
        answers: [
            {text:"A. High in oil and salt",value:-1,suggestion:"You need to eat less high-fat and high-salt foods"},
            {text:"B. Very spicy",value:-1,suggestion:"Your diet should be blander"},
            {text:"C. I only like meat",value:-1,suggestion:"Try to balance your diet by eating more fruit and less protein."},
            {text:"D. None of the above",value:0,suggestion:"You have very good diet, please keep up"}
        ]
    },
    {
        question: "Do you usually have breakfast?",
        answers: [
            {text:"A. Yes",value:0,suggestion:"Good job!"},
            {text:"B. No",value:-1,suggestion:"You have to eat breakfast."},
        ]
    },
    {
        question: "How long does it usually take you to eat a meal?",
        answers: [
            {text:"A. 0-10min",value:-1,suggestion:"Good job!"},
            {text:"B. 10-20min",value:-0.5,suggestion:"You have to eat breakfast."},
            {text:"C. 20-30min",value:0,suggestion:"You have to eat breakfast."},
            {text:"D. 30min+",value:-0.5,suggestion:"You have to eat breakfast."}
        ]
    },
    {
        question: "I love to drink ____ more.",
        answers: [
            {text:"A. Water",value:0,suggestion:"Good job!"},
            {text:"B. Coffee/Tea",value:-0.5,suggestion:"You have to eat breakfast."},
            {text:"C. Juice",value:-0.5,suggestion:"You have to eat breakfast."},
            {text:"D. Soda",value:-1,suggestion:"You have to eat breakfast."},
            {text:"E. Alcohol",value:-1,suggestion:"You have to eat breakfast."}
        ]
    },
    {
        question: "I sleep at ___ every day.",
        answers: [
            {text:"A. Before 11 pm",value:0,suggestion:"Good job!"},
            {text:"B. Between 11 pm-12 am",value:-0.5,suggestion:"You have to eat breakfast."},
            {text:"C. After 12 am",value:-1,suggestion:"You have to eat breakfast."}  
        ]
    },
    {
        question: "How long do you usually need to have a bowel movement？",
        answers: [
            {text:"A. <5min",value:0,suggestion:"Good job!"},
            {text:"B. 5-10min",value:-0.5,suggestion:"You have to eat breakfast."},
            {text:"C. >10min",value:-1,suggestion:"You have to eat breakfast."}  
        ]
    },
    {
        question: "Do you usually feel unwell when the seasons change, such as colds, illnesses, or allergies?",
        answers: [
            {text:"A. Yes",value:-1,suggestion:"Good job!"},
            {text:"B. No",value:0,suggestion:"You have to eat breakfast."},
        ]
    },
    {
        question: "Do you often feel tired？",
        answers: [
            {text:"A. Yes",value:-1,suggestion:"Good job!"},
            {text:"B. No",value:0,suggestion:"You have to eat breakfast."},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerElement=document.getElementById("answer");
const nextButton=document.getElementsByClassName("nextPage");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNum=currentQuestionIndex+1;
    questionElement.innerHTML=questionNum+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answers=>{
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        // button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

// function selectAnswer(e){
//     const selectedBtn=e.target;
//     Array.from(answerElement.children).forEach(button=>{

//     })
// }

startQuiz();