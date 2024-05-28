const questions = [
  {
    question: " Abstract ",
    answers: [
      { text: "Yalan  ", correct: false },
      { text: "Soyut ", correct: true },
      { text: "Gerçek  ", correct: false },
      { text: "Somut ", correct: false },
    ],
  },
  {
    question: "Briefing  ",
    answers: [
      { text: "Özel  ", correct: false },
      { text: "Bütün ", correct: false },
      { text: "Özet  ", correct: true },

      { text: "Genel ", correct: false },
    ],
  },
  {
    question: "Cohesive  ",
    answers: [
      { text: "Birleştirici  ", correct: true },
      { text: "Ayrıştırıcı  ", correct: false },
      { text: "Birlik ", correct: false },
      { text: "Ayrılık", correct: false },
    ],
  },
  {
    question: " Çeşitli ",
    answers: [
      { text: "Diverse  ", correct: true },
      { text: "Individual  ", correct: false },
      { text: "Division ", correct: false },
      { text: "Divorce", correct: false },
    ],
  },
  {
    question: "Emphasis  ",
    answers: [
      { text: "Nokta  ", correct: false },
      { text: "Vurgu ", correct: true },
      { text: "İşaret   ", correct: false },
      { text: "Dikkat ", correct: false },
    ],
  },
  {
    question: " Validate  ",
    answers: [
      { text: "Onaylamak   ", correct: true },
      { text: "Sinirlenmek    ", correct: false },
      { text: "Davet etmek   ", correct: false },
      { text: "Reddetmek ", correct: false },
    ],
  },
  {
    question: " Framework  ",
    answers: [
      { text: "Ekran   ", correct: false },
      { text: "Pencere  ", correct: false },
      { text: "Çerçeve ", correct: true },
      { text: "Tencere ", correct: false },
    ],
  },
  {
    question: "  Kılavuz  ",
    answers: [
      { text: "Guideline   ", correct: true },
      { text: "Line   ", correct: false },
      { text: "Guide   ", correct: false },
      { text: "Lift", correct: false },
    ],
  },
  {
    question: " Hypothesis  ",
    answers: [
      { text: "Bilim    ", correct: false },
      { text: "Teori    ", correct: false },
      { text: "Hipotez   ", correct: true },

      { text: "Bilim adamı", correct: false },
    ],
  },
  {
    question: " Nakletmek  ",
    answers: [
      { text: "Impress   ", correct: false },
      { text: "Implement   ", correct: false },
      { text: "Implant    ", correct: true },

      { text: "Impossible", correct: false },
    ],
  },
  {
    question: " Sadece ",
    answers: [
      { text: "Juice   ", correct: false },
      { text: "Jacket     ", correct: false },
      { text: "Joke ", correct: false },
      { text: "Just     ", correct: true },
    ],
  },
  {
    question: " Mediate ",
    answers: [
      { text: "Aracılık      ", correct: true },
      { text: "Ara    ", correct: false },
      { text: "Bulmak       ", correct: false },
      { text: "Buluş", correct: false },
    ],
  },
  {
    question: " Negotiate  ",
    answers: [
      { text: "Müzakere ", correct: true },
      { text: "Azim    ", correct: false },
      { text: "Mücadele    ", correct: false },
      { text: "Savaş ", correct: false },
    ],
  },
  {
    question: "Overseas  ",
    answers: [
      { text: "Yurt içi    ", correct: false },
      { text: "Yurt dışı    ", correct: true },

      { text: "Yerel    ", correct: false },
      { text: "Uluslararası", correct: false },
    ],
  },
  {
    question: " Profundity ",
    answers: [
      { text: "Açıklık   ", correct: false },
      { text: "Yükseklik      ", correct: false },
      { text: "Derinlik      ", correct: true },

      { text: "Genişlik", correct: false },
    ],
  },
  {
    question: " Rational  ",
    answers: [
      { text: "Mantıklı     ", correct: true },
      { text: "Akıllı    ", correct: false },
      { text: "Güçlü        ", correct: false },
      { text: "Karizmatik", correct: false },
    ],
  },
  {
    question: " Önemli  ",
    answers: [
      { text: "Signal      ", correct: false },
      { text: "Sign    ", correct: false },
      { text: "Signet  ", correct: false },
      { text: "Significant     ", correct: true },
    ],
  },
  {
    question: " Transitional  ",
    answers: [
      { text: "Geçiş ", correct: true },
      { text: "Giriş    ", correct: false },
      { text: "Gidiş    ", correct: false },
      { text: "Geliş   ", correct: false },
    ],
  },
  {
    question: "Sabotaj  ",
    answers: [
      { text: "Under      ", correct: false },
      { text: "Mine     ", correct: false },
      { text: "Undermine   ", correct: true },

      { text: "Understand  ", correct: false },
    ],
  },
  {
    question: " Widespread ",
    answers: [
      { text: "Geniş      ", correct: false },
      { text: "Nadir      ", correct: false },
      { text: "Yaygın   ", correct: true },

      { text: "Eski   ", correct: false },
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
