const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    answer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: 2
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const timeEl = document.getElementById("time");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, index) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(index);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  quiz.innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
}

prevBtn.addEventListener("click", prevQuestion);
nextBtn.addEventListener("click", nextQuestion);

loadQuestion();
startTimer();
