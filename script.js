// Define multiple quizzes with name and question data
const quizzes = [{
        name: "General Knowledge",
        questions: [{
                question: "What is the capital of France?",
                choices: ["Berlin", "London", "Paris", "Madrid"],
                correctIndex: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                choices: ["Earth", "Mars", "Jupiter", "Venus"],
                correctIndex: 1
            },
            {
                question: "What does HTML stand for?",
                choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
                correctIndex: 0
            },
            {
                question: "Which is the largest mammal?",
                choices: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
                correctIndex: 1
            },
            {
                question: "What is the square root of 144?",
                choices: ["10", "11", "12", "13"],
                correctIndex: 2
            },
            {
                question: "What year did the Titanic sink?",
                choices: ["1910", "1912", "1905", "1915"],
                correctIndex: 1
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
                correctIndex: 1
            },
            {
                question: "What is the chemical symbol for gold?",
                choices: ["Au", "Ag", "O", "Go"],
                correctIndex: 0
            },
            {
                question: "Who painted the Mona Lisa?",
                choices: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                correctIndex: 2
            },
            {
                question: "Which country has the largest population?",
                choices: ["India", "USA", "China", "Russia"],
                correctIndex: 2
            }
        ]
    },
    {
        name: "Science & Nature",
        questions: [{
                question: "Which gas do plants absorb from the atmosphere?",
                choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
                correctIndex: 2
            },
            {
                question: "What is the currency of Japan?",
                choices: ["Yuan", "Won", "Yen", "Dollar"],
                correctIndex: 2
            },
            {
                question: "Which organ detoxifies chemicals in the human body?",
                choices: ["Kidney", "Liver", "Heart", "Lung"],
                correctIndex: 1
            },
            {
                question: "Who discovered penicillin?",
                choices: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
                correctIndex: 1
            },
            {
                question: "Which is the smallest bone in the human body?",
                choices: ["Stapes", "Femur", "Radius", "Tibia"],
                correctIndex: 0
            },
            {
                question: "What is the boiling point of water?",
                choices: ["90°C", "100°C", "110°C", "120°C"],
                correctIndex: 1
            },
            {
                question: "Which gas is most abundant in Earth's atmosphere?",
                choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
                correctIndex: 1
            },
            {
                question: "What is H2O more commonly known as?",
                choices: ["Salt", "Water", "Hydrogen Peroxide", "Oxygen"],
                correctIndex: 1
            },
            {
                question: "What is the powerhouse of the cell?",
                choices: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
                correctIndex: 1
            },
            {
                question: "What device do we use to look at stars?",
                choices: ["Microscope", "Telescope", "Binoculars", "Periscope"],
                correctIndex: 1
            }
        ]
    },
    {
        name: "Geography & History",
        questions: [{
                question: "In which continent is the Sahara Desert?",
                choices: ["Asia", "Africa", "Australia", "South America"],
                correctIndex: 1
            },
            {
                question: "What is the capital city of Australia?",
                choices: ["Sydney", "Perth", "Melbourne", "Canberra"],
                correctIndex: 3
            },
            {
                question: "Which country gifted the Statue of Liberty to the USA?",
                choices: ["Germany", "France", "England", "Spain"],
                correctIndex: 1
            },
            {
                question: "What is the name of the longest river in the world?",
                choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correctIndex: 1
            },
            {
                question: "In what year did man first land on the Moon?",
                choices: ["1965", "1969", "1971", "1975"],
                correctIndex: 1
            },
            {
                question: "Which city hosted the 2016 Summer Olympics?",
                choices: ["London", "Rio de Janeiro", "Tokyo", "Beijing"],
                correctIndex: 1
            },
            {
                question: "How many continents are there on Earth?",
                choices: ["5", "6", "7", "8"],
                correctIndex: 2
            },
            {
                question: "Who is known as the Father of Computers?",
                choices: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
                correctIndex: 1
            },
            {
                question: "What is the tallest mountain in the world?",
                choices: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
                correctIndex: 2
            },
            {
                question: "What year did World War II end?",
                choices: ["1944", "1945", "1946", "1947"],
                correctIndex: 1
            }
        ]
    }
];

// Elements for quiz selection screen
const quizListEl = document.getElementById('quiz-list');
const quizSelectionSection = document.getElementById('quiz-selection');

// Elements for quiz playing screen
const quizGameSection = document.getElementById('quiz-game');
const quizTitle = document.getElementById('quiz-title');
const questionNumberElement = document.getElementById('question-number');
const questionElement = document.getElementById('question');
const answersList = document.querySelector('.answers');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Populate quiz selection menu
function populateQuizSelection() {
    quizListEl.innerHTML = '';
    quizzes.forEach((quiz, idx) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = quiz.name;
        btn.className = 'quiz-btn';
        btn.type = 'button';
        btn.setAttribute('data-index', idx);
        btn.addEventListener('click', () => {
            startQuiz(idx);
        });
        li.appendChild(btn);
        quizListEl.appendChild(li);
    });
}

// Start quiz with selected quiz index
function startQuiz(quizIndex) {
    currentQuiz = quizzes[quizIndex];
    currentQuestionIndex = 0;
    score = 0;
    quizTitle.textContent = currentQuiz.name;
    quizSelectionSection.style.display = 'none';
    quizGameSection.style.display = 'flex';
    loadQuestion();
    scoreElement.textContent = '';
    feedbackElement.textContent = '';
    restartBtn.hidden = true;
}

// Load current question
function loadQuestion() {
    answered = false;
    feedbackElement.textContent = '';
    nextBtn.hidden = true;
    restartBtn.hidden = true;
    scoreElement.textContent = '';

    const currentQ = currentQuiz.questions[currentQuestionIndex];
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    questionElement.textContent = currentQ.question;

    // Clear old choices
    answersList.innerHTML = '';
    currentQ.choices.forEach((choice, idx) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.type = 'button';
        btn.textContent = choice;
        btn.setAttribute('data-index', idx);
        btn.setAttribute('aria-pressed', 'false');
        btn.addEventListener('click', selectAnswer);
        li.appendChild(btn);
        answersList.appendChild(li);
    });
}

// Handle answer selection
function selectAnswer(e) {
    if (answered) return;
    answered = true;
    const selectedBtn = e.target;
    const selectedIdx = Number(selectedBtn.getAttribute('data-index'));
    const currentQ = currentQuiz.questions[currentQuestionIndex];
    const allButtons = answersList.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.classList.add('disabled'));

    if (selectedIdx === currentQ.correctIndex) {
        selectedBtn.classList.add('correct');
        feedbackElement.textContent = 'Correct! 🎉';
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        feedbackElement.textContent = `Wrong! The correct answer is "${currentQ.choices[currentQ.correctIndex]}".`;
        allButtons[currentQ.correctIndex].classList.add('correct');
    }
    nextBtn.hidden = false;
    updateScore();
}

function updateScore() {
    scoreElement.textContent = `Score: ${score} / ${currentQuiz.questions.length}`;
}

// Next question button handler
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuiz.questions.length) {
        showFinalResults();
    } else {
        loadQuestion();
    }
});

// Restart quiz button handler (go back to quiz selection)
restartBtn.addEventListener('click', () => {
    quizGameSection.style.display = 'none';
    quizSelectionSection.style.display = 'block';
    currentQuiz = null;
    currentQuestionIndex = 0;
    score = 0;
    feedbackElement.textContent = '';
    scoreElement.textContent = '';
    nextBtn.hidden = true;
    restartBtn.hidden = true;
});

// Show final results
function showFinalResults() {
    questionNumberElement.textContent = '';
    questionElement.textContent = 'Quiz Completed!';
    answersList.innerHTML = '';
    feedbackElement.textContent = '';
    scoreElement.textContent = `Your final score is ${score} out of ${currentQuiz.questions.length}.`;
    nextBtn.hidden = true;
    restartBtn.hidden = false;
}

// Initialize app by showing quiz selection first
populateQuizSelection();
