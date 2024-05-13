const questions = [
  {
    question: " Apple",
    answers: [
      { text: "Armut", correct: false },
      { text: "Muz ", correct: false },
      { text: "Elma ", correct: true },
      { text: "Kiraz ", correct: false },
    ],
  },
  {
    question: "Book",
    answers: [
      { text: "Defter ", correct: false },
      { text: "Kitap ", correct: true },
      { text: "Kalem ", correct: false },
      { text: "Silgi", correct: false },
    ],
  },
  {
    question: "Kedi",
    answers: [
      { text: "Snake ", correct: false },
      { text: "Bee ", correct: false },
      { text: "Dog", correct: false },
      { text: "Cat", correct: true },
    ],
  },
  {
    question: "Köpek",
    answers: [
      { text: "Dog ", correct: true },
      { text: "Cat ", correct: false },
      { text: "Fox", correct: false },
      { text: "Cow", correct: false },
    ],
  },
  {
    question: " Yumurta",
    answers: [
      { text: "Honey", correct: false },
      { text: "Egg  ", correct: true },
      { text: "Cookie  ", correct: false },
      { text: "Soup", correct: false },
    ],
  },
  {
    question: "Family",
    answers: [
      { text: "Aile   ", correct: true },
      { text: "Akraba   ", correct: false },
      { text: "Arkadaş ", correct: false },
      { text: "Kardeş", correct: false },
    ],
  },
  {
    question: "Girl",
    answers: [
      { text: "Kadın  ", correct: false },
      { text: "Erkek ", correct: false },
      { text: "Oğlan ", correct: false },
      { text: "Kız", correct: true },
    ],
  },
  {
    question: " Ev ",
    answers: [
      { text: "Kitchen  ", correct: false },
      { text: "Bedroom  ", correct: false },
      { text: "House  ", correct: true },
      { text: "Skyscraper", correct: false },
    ],
  },
  {
    question: " Ice ",
    answers: [
      { text: "Su  ", correct: false },
      { text: " Buhar", correct: false },
      { text: "Buz   ", correct: true },
      { text: "Sıcak", correct: false },
    ],
  },
  {
    question: "Juice",
    answers: [
      { text: "Soda   ", correct: false },
      { text: "Meyve Suyu  ", correct: true },
      { text: "Su  ", correct: false },
      { text: "Çay", correct: false },
    ],
  },
  {
    question: "Mutfak",
    answers: [
      { text: "Kitchen    ", correct: true },
      { text: "Bathroom  ", correct: false },
      { text: "Bedroom     ", correct: false },
      { text: "Living room", correct: false },
    ],
  },
  {
    question: " Love",
    answers: [
      { text: "Öfke    ", correct: false },
      { text: "Kıskançlık   ", correct: false },
      { text: "Masumiyet    ", correct: false },
      { text: "Sevgi", correct: true },
    ],
  },
  {
    question: " Anne",
    answers: [
      { text: "Father ", correct: false },
      { text: "Mother   ", correct: true },
      { text: "Grandfather   ", correct: false },
      { text: "Sister", correct: false },
    ],
  },
  {
    question: " Night ",
    answers: [
      { text: "Gece    ", correct: true },
      { text: "Sabah    ", correct: false },
      { text: "İkindi   ", correct: false },
      { text: "Öğle", correct: false },
    ],
  },
  {
    question: " Orange ",
    answers: [
      { text: "Çilek     ", correct: false },
      { text: "Karpuz     ", correct: false },
      { text: "Muz     ", correct: false },
      { text: "Portakal", correct: true },
    ],
  },
  {
    question: " Pen ",
    answers: [
      { text: "Kalem    ", correct: true },
      { text: "Defter   ", correct: false },
      { text: "Silgi       ", correct: false },
      { text: "Kağıt", correct: false },
    ],
  },
  {
    question: " Queen ",
    answers: [
      { text: "Kral    ", correct: false },
      { text: "Kraliçe     ", correct: true },
      { text: "Prenses    ", correct: false },
      { text: "Prens  ", correct: false },
    ],
  },
  {
    question: "Road ",
    answers: [
      { text: "Dağ ", correct: false },
      { text: "Orman   ", correct: false },
      { text: "Bisiklet   ", correct: false },
      { text: "Yol  ", correct: true },
    ],
  },
  {
    question: " Güneş",
    answers: [
      { text: "Moon  ", correct: false },
      { text: "Earth    ", correct: false },
      { text: "Sun     ", correct: true },
      { text: "Egg  ", correct: false },
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
