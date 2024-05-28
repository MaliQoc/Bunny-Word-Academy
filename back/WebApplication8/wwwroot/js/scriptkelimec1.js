const questions = [
  {
    question: "   Endeavour ",
    answers: [
      { text: "İlişki ", correct: false },
      { text: " Çaba göstermek ", correct: true },
      { text: "Paradigma ", correct: false },
      { text: "Hiyerarşi", correct: false },
    ],
  },
  {
    question: "Memnun etmek",
    answers: [
      {
        text: " Endeavour",
        correct: false,
      },
      {
        text: "Gratify  ",
        correct: true,
      },
      {
        text: "Tangible ",
        correct: false,
      },
      {
        text: "Mitigate",
        correct: false,
      },
    ],
  },
  {
    question: "Hierarchy ",
    answers: [
      {
        text: "Kötüleşmek ",
        correct: false,
      },
      {
        text: "İma ",
        correct: false,
      },
      {
        text: "Hiyerarşi",
        correct: true,
      },
      {
        text: "Dayanıklılık ",
        correct: false,
      },
    ],
  },
  {
    question: "scrutinize",
    answers: [
      {
        text: "Memnun etmek ",
        correct: false,
      },
      {
        text: "İncelemek ",
        correct: true,
      },
      {
        text: "Şevk",
        correct: false,
      },
      {
        text: "Uygulanabilirlik",
        correct: false,
      },
    ],
  },
  {
    question: "Implication ",
    answers: [
      { text: "Bağlantı", correct: false },
      { text: "Kötüleşmek     ", correct: false },
      { text: "İma  ", correct: true },
      { text: "Dayanıklılık", correct: false },
    ],
  },
  {
    question: "yaşayabilir, uygulanabilir",
    answers: [
      { text: "Viable   ", correct: true },
      { text: "Endeavour   ", correct: false },
      { text: "Mitigate   ", correct: false },
      { text: "Tangible", correct: false },
    ],
  },
  {
    question: " Unprecedented ",
    answers: [
      { text: "  Eşi benzeri görülmemiş", correct: true },
      { text: "Şevk ", correct: false },
      { text: "İlişki ", correct: false },
      { text: "Dayanıklılık ", correct: false },
    ],
  },
  {
    question: "somut",
    answers: [
      { text: " Hiyerarşi ", correct: false },
      { text: "Tangible  ", correct: true },
      { text: "Mitigate   ", correct: false },
      { text: "Quintessential", correct: false },
    ],
  },
  {
    question: "complacency",
    answers: [
      { text: " İncelemek ", correct: false },
      { text: " Memnun etmek   ", correct: false },
      { text: "Kendine güven    ", correct: true },
      { text: "Çaba göstermek", correct: false },
    ],
  },
  {
    question: " İlişki ",
    answers: [
      { text: "Relationship   ", correct: true },
      { text: "Scrutinize  ", correct: false },
      { text: "Articulate  ", correct: false },
      { text: "Wholesome", correct: false },
    ],
  },
  {
    question: "Sevk, heves",
    answers: [
      { text: "Resilience    ", correct: false },
      { text: "Zeal  ", correct: true },
      { text: "Implication     ", correct: false },
      { text: "Feasibility", correct: false },
    ],
  },
  {
    question: " Mitigate ",
    answers: [
      { text: "  Hafifletmek  ", correct: true },
      { text: "İncelemek   ", correct: false },
      { text: "Bağlantı    ", correct: false },
      { text: "İma ", correct: false },
    ],
  },
  {
    question: "paradigma",
    answers: [
      { text: " Tangible", correct: false },
      { text: "Endeavour    ", correct: false },
      { text: "Hierarchy   ", correct: false },
      { text: "Paradigm", correct: true },
    ],
  },
  {
    question: "Feasibility ",
    answers: [
      { text: "Uygulanabilirlik    ", correct: true },
      { text: "Kusursuz    ", correct: false },
      { text: "Kendine güven   ", correct: false },
      { text: "İncelemek", correct: false },
    ],
  },
  {
    question: " Tangible  ",
    answers: [
      { text: "   İlişki  ", correct: false },
      { text: "Şevk     ", correct: false },
      { text: "Somut     ", correct: true },
      { text: "Dayanıklılık ", correct: false },
    ],
  },
  {
    question: "Resilience ",
    answers: [
      { text: "İlişki    ", correct: false },
      { text: "Dayanıklılık   ", correct: true },
      { text: "İma       ", correct: false },
      { text: "Hafifletmek", correct: false },
    ],
  },
  {
    question: "zeal",
    answers: [
      { text: "İncelemek    ", correct: false },
      { text: "Çaba göstermek     ", correct: false },
      { text: "Şevk    ", correct: true },
      { text: "Memnun etmek  ", correct: false },
    ],
  },
  {
    question: "Paradigm ",
    answers: [
      { text: "Paradigma ", correct: true },
      { text: "Dayanıklılık   ", correct: false },
      { text: "Hafifletmek   ", correct: false },
      { text: "İlişki   ", correct: false },
    ],
  },
  {
    question: " Incongruous ",
    answers: [
      { text: "İlişki  ", correct: false },
      { text: "Uygulanabilirlik    ", correct: false },
      { text: "Uygunsuz    ", correct: true },
      { text: "İncelemek  ", correct: false },
    ],
  },
  {
    question: "Ayrıcalık",
    answers: [
      { text: " Wholesome  ", correct: false },
      { text: "Scrutinize     ", correct: false },
      { text: "Warrant      ", correct: true },
      { text: "Endeavour  ", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = ` you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "play again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
