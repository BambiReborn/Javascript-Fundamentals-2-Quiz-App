// QUIZ APP ON FINANCIAL MANAGEMENT AND INVESTMENT

// STEP 1 - Questions array
const quizQuestions = [
    {
        question: "What is diversification in investment?",
        options: ["Putting all money in one asset", "Investing in different assets to reduce risk", "Avoiding investments", "Trading daily", "Borrowing money to invest"],
        answer: 1
    },
    {
        question: "What is an asset?",
        options: ["A liability", "Something that increases expenses", "Something of value that can generate income", "A type of debt", "A tax payment"],
        answer: 2
    },
    {
        question: "What is a liability?",
        options: ["Money you earn", "An investment", "Something you own", "A financial obligation or debt", "Profit from business"],
        answer: 3
    },
    {
        question: "What is return on investment (ROI)?",
        options: ["Profit or gain from an investment", "Total money spent", "Loss in investment", "Tax paid", "Loan amount"],
        answer: 0
    },
    {
        question: "What is budgeting?",
        options: ["Spending without planning", "Tracking and planning income and expenses", "Investing all money", "Avoiding savings", "Borrowing funds"],
        answer: 1
    }
];

// STEP 2 - Trackers
let currentQuestionNumber = 0;
let score = 0;
let optionSelected = null;

// STEP 3 - DOM selection
const progressEl = document.getElementById("questionProgress");
const questionEl = document.getElementById("questions");
const optionsEl = document.getElementById("options");
const nextBTN = document.getElementById("next-BTN");

// Hide next button on load
nextBTN.style.display = "none";

// STEP 4 - Load question
function loadQuestion() {
    optionSelected = null;

    const currentQuestion = quizQuestions[currentQuestionNumber];

    progressEl.textContent = "Question " + (currentQuestionNumber + 1) + " of " + quizQuestions.length;
    questionEl.textContent = currentQuestion.question;

    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(function(option, index) {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", function() {
            selectAnswer(index);
        });
        optionsEl.appendChild(button);
    });
}

// STEP 5 - Select answer
function selectAnswer(selected) {
    optionSelected = selected;

    const currentQuestion = quizQuestions[currentQuestionNumber];

    if (selected === currentQuestion.answer) {
        score = score + 1;
    }

    nextBTN.style.display = "block";
}

// STEP 6 - Next button
nextBTN.onclick = function() {
    if (optionSelected === null) {
        alert("Please select an answer!");
        return;
    }

    currentQuestionNumber = currentQuestionNumber + 1;

    if (currentQuestionNumber < quizQuestions.length) {
        nextBTN.style.display = "none";
        loadQuestion();
    } else {
        showResult();
    }
};

// STEP 7 - Show result
function showResult() {
    progressEl.style.display = "none";
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBTN.style.display = "none";

    document.getElementById("finalScore").textContent = "You scored " + score + " out of " + quizQuestions.length;
    document.getElementById("result").style.display = "block";
}

// STEP 8 - Restart
function restartQuiz() {
    currentQuestionNumber = 0;
    score = 0;
    optionSelected = null;

    progressEl.style.display = "block";
    questionEl.style.display = "block";
    optionsEl.style.display = "block";
    nextBTN.style.display = "none";

    document.getElementById("result").style.display = "none";

    loadQuestion();
}

// STEP 9 - Start
loadQuestion();