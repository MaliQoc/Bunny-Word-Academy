const questions = [
  {
    question: "Achieve ",
    answers: [
      { text: "Başarmak   ", correct: true },
      { text: "Düşmek   ", correct: false },
      { text: "Kalkmak   ", correct: false },
      { text: " Başarısız olmak", correct: false },
    ],
  },
  {
    question: "Özet ",
    answers: [
      {
        text: "Book   ",
        correct: false,
      },
      {
        text: "Novel   ",
        correct: false,
      },
      {
        text: "Notebook  ",
        correct: false,
      },
      {
        text: "Brief ",
        correct: true,
      },
    ],
  },
  {
    question: "Consume    ",
    answers: [
      {
        text: "Hasat etmek  ",
        correct: false,
      },
      {
        text: "Üretmek   ",
        correct: false,
      },
      {
        text: "Tüketmek  ",
        correct: true,
      },
      {
        text: "Yakmak",
        correct: false,
      },
    ],
  },
  {
    question: " Tartışma ",
    answers: [
      {
        text: "Debate   ",
        correct: true,
      },
      {
        text: "Decision   ",
        correct: false,
      },
      {
        text: "Devoured  ",
        correct: false,
      },
      {
        text: "Demolish",
        correct: false,
      },
    ],
  },
  {
    question: " Çevre ",
    answers: [
      { text: "Tree   ", correct: false },
      { text: "Environment   ", correct: true },
      { text: "Natural    ", correct: false },
      { text: "Entertainment ", correct: false },
    ],
  },
  {
    question: "Financial ",
    answers: [
      { text: "Eğlence    ", correct: false },
      { text: "Spor haberleri     ", correct: false },
      { text: "Haber     ", correct: false },
      { text: "Mali ", correct: true },
    ],
  },
  {
    question: "Tradition  ",
    answers: [
      { text: "Yeni   ", correct: false },
      { text: "Eski   ", correct: false },
      { text: "Yenilik   ", correct: false },
      { text: "Gelenek ", correct: true },
    ],
  },
  {
    question: "Govern  ",
    answers: [
      { text: "Yönetme    ", correct: true },
      { text: "Yürütme    ", correct: false },
      { text: "Yasama    ", correct: false },
      { text: "Yargı", correct: false },
    ],
  },
  {
    question: " Health ",
    answers: [
      { text: "Para    ", correct: false },
      { text: "Mutluluk      ", correct: false },
      { text: "Huzur    ", correct: false },
      { text: "Sağlık", correct: true },
    ],
  },
  {
    question: " Etkilemek ",
    answers: [
      { text: "Influence    ", correct: true },
      { text: "Improve    ", correct: false },
      { text: "Implement     ", correct: false },
      { text: "Invitation ", correct: false },
    ],
  },
  {
    question: "Journal ",
    answers: [
      { text: "Yıllık     ", correct: false },
      { text: "Aylık ", correct: false },
      { text: "Haftalık       ", correct: false },
      { text: "Günlük ", correct: true },
    ],
  },
  {
    question: " Knowledge ",
    answers: [
      { text: "Tecrübe      ", correct: false },
      { text: "Zeka    ", correct: false },
      { text: "Akıl      ", correct: false },
      { text: "Bilgi ", correct: true },
    ],
  },
  {
    question: "Boş zaman",
    answers: [
      { text: "Leisure  ", correct: true },
      { text: "Worker     ", correct: false },
      { text: "Time     ", correct: false },
      { text: "Work ", correct: false },
    ],
  },
  {
    question: "Azınlık  ",
    answers: [
      { text: "Minority      ", correct: true },
      { text: "Minor      ", correct: false },
      { text: "Major     ", correct: false },
      { text: "Majority", correct: false },
    ],
  },
  {
    question: " Novel  ",
    answers: [
      { text: "Tiyatro      ", correct: false },
      { text: "Hikaye       ", correct: false },
      { text: "Şiir       ", correct: false },
      { text: "Roman ", correct: true },
    ],
  },
  {
    question: "Opportunity ",
    answers: [
      { text: "Fırsat      ", correct: true },
      { text: "Zam     ", correct: false },
      { text: "İndirim         ", correct: false },
      { text: "Fiyat", correct: false },
    ],
  },
  {
    question: " Kirlilik ",
    answers: [
      { text: "Population      ", correct: false },
      { text: "Policy      ", correct: false },
      { text: "Polite      ", correct: false },
      { text: "Pollution   ", correct: true },
    ],
  },
  {
    question: "Kalite ",
    answers: [
      { text: "Quantity   ", correct: false },
      { text: "Quantitative     ", correct: false },
      { text: "Quality    ", correct: true },
      { text: "Quantum   ", correct: false },
    ],
  },
  {
    question: "Resource ",
    answers: [
      { text: "Temel    ", correct: true },
      { text: "Öz      ", correct: false },
      { text: "Kabuk      ", correct: false },
      { text: "Kaynak  ", correct: false },
    ],
  },
  {
    question: "Skill ",
    answers: [
      { text: "Kazanmak    ", correct: false },
      { text: "Beceri       ", correct: true },
      { text: "Mağlubiyet       ", correct: false },
      { text: "Başarı  ", correct: false },
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
