const questions = [
  {
    question: " Bicycle ",
    answers: [
      { text: "Tır ", correct: false },
      { text: "Araba  ", correct: false },
      { text: "Bisiklet  ", correct: true },
      { text: "Tren ", correct: false },
    ],
  },
  {
    question: "Cheap ",
    answers: [
      { text: "Pahalı  ", correct: false },
      { text: "Ucuz  ", correct: true },
      { text: "Paralı  ", correct: false },
      { text: "Ücretsiz", correct: false },
    ],
  },
  {
    question: "Delicious ",
    answers: [
      { text: "Acılı ", correct: false },
      { text: "Tuzlu  ", correct: false },
      { text: "Tatlı ", correct: false },
      { text: "Lezzetli ", correct: true },
    ],
  },
  {
    question: "Heyecanlı ",
    answers: [
      { text: "Excited  ", correct: true },
      { text: "Bored  ", correct: false },
      { text: "Frightened ", correct: false },
      { text: "Sad", correct: false },
    ],
  },
  {
    question: " Üzüm  ",
    answers: [
      { text: "apple ", correct: false },
      { text: "grapes   ", correct: true },
      { text: "banana   ", correct: false },
      { text: "potato", correct: false },
    ],
  },
  {
    question: "Hastane ",
    answers: [
      { text: "hospital    ", correct: true },
      { text: "stadium    ", correct: false },
      { text: "kitchen  ", correct: false },
      { text: "postoffice", correct: false },
    ],
  },
  {
    question: "Invitation ",
    answers: [
      { text: "Kabul etme  ", correct: false },
      { text: "Ret  ", correct: false },
      { text: "Mektup  ", correct: false },
      { text: "Davet ", correct: true },
    ],
  },
  {
    question: " Yolculuk  ",
    answers: [
      { text: "Street   ", correct: false },
      { text: "Kite   ", correct: false },
      { text: "Journey  ", correct: true },
      { text: "Road ", correct: false },
    ],
  },
  {
    question: " Uçurtma  ",
    answers: [
      { text: "Train   ", correct: false },
      { text: " Hat ", correct: false },
      { text: "Kite    ", correct: true },
      { text: "Shoe", correct: false },
    ],
  },
  {
    question: "Luggage ",
    answers: [
      { text: "Poşet    ", correct: false },
      { text: "Bagaj   ", correct: true },
      { text: "Yük   ", correct: false },
      { text: "Çanta", correct: false },
    ],
  },
  {
    question: "Dağ ",
    answers: [
      { text: "Mountain     ", correct: true },
      { text: "Lake   ", correct: false },
      { text: "Sea      ", correct: false },
      { text: "River", correct: false },
    ],
  },
  {
    question: " Necklace ",
    answers: [
      { text: "Bilezik     ", correct: false },
      { text: "Yüzük    ", correct: false },
      { text: "Küpe     ", correct: false },
      { text: "Kolye", correct: true },
    ],
  },
  {
    question: " Ocean ",
    answers: [
      { text: "Nehir  ", correct: false },
      { text: "Okyanus    ", correct: true },
      { text: "Deniz    ", correct: false },
      { text: "Göl", correct: false },
    ],
  },
  {
    question: " Pig  ",
    answers: [
      { text: "Domuz     ", correct: true },
      { text: "Köpek     ", correct: false },
      { text: "Kurbağa    ", correct: false },
      { text: "Kaplumbağa", correct: false },
    ],
  },
  {
    question: " Restaurant  ",
    answers: [
      { text: "Hastane      ", correct: false },
      { text: "Okul      ", correct: false },
      { text: "Müdüriyet     ", correct: false },
      { text: "Restoran ", correct: true },
    ],
  },
  {
    question: " Street  ",
    answers: [
      { text: "Sokak     ", correct: true },
      { text: "Cadde    ", correct: false },
      { text: "Mahalle        ", correct: false },
      { text: "İlçe", correct: false },
    ],
  },
  {
    question: " Tren  ",
    answers: [
      { text: "Car     ", correct: false },
      { text: "Train      ", correct: true },
      { text: "Ship     ", correct: false },
      { text: "Plane  ", correct: false },
    ],
  },
  {
    question: "Sebze  ",
    answers: [
      { text: "Eat  ", correct: false },
      { text: "Fruit    ", correct: false },
      { text: "Sweet    ", correct: false },
      { text: "Vegetable  ", correct: true },
    ],
  },
  {
    question: " Quiet ",
    answers: [
      { text: "Gürültülü   ", correct: false },
      { text: "Sesli     ", correct: false },
      { text: "Sessiz      ", correct: true },
      { text: "Bağırtı  ", correct: false },
    ],
  },
  {
    question: "Tree",
    answers: [
      { text: "Yaprak   ", correct: false },
      { text: "Çiçek     ", correct: false },
      { text: "Ağaç     ", correct: true },
      { text: "Toprak  ", correct: false },
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
