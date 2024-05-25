const questions = [
  {
    question: "Holistic",
    answers: [
      { text: "Uygun ", correct: false },
      { text: "Bütüncül ", correct: true },
      { text: " Görkemli  ", correct: false },
      { text: "İkilem", correct: false },
    ],
  },
  {
    question: "Substantiate",
    answers: [
      {
        text: " Doğrulamak",
        correct: true,
      },
      {
        text: "Yakınmak  ",
        correct: false,
      },
      {
        text: "Karmaşıklaştırmak ",
        correct: false,
      },
      {
        text: "Her yerde bulunan",
        correct: false,
      },
    ],
  },
  {
    question: "Incongruous",
    answers: [
      {
        text: "Belirsiz",
        correct: false,
      },
      {
        text: "Kötüleştirmek ",
        correct: false,
      },
      {
        text: "Uygun",
        correct: true,
      },
      {
        text: "İkilem ",
        correct: false,
      },
    ],
  },
  {
    question: "Çoğalmak",
    answers: [
      {
        text: "Proliferate ",
        correct: true,
      },
      {
        text: "Kinesthetic ",
        correct: false,
      },
      {
        text: "Vindicate",
        correct: false,
      },
      {
        text: "Obfuscate",
        correct: false,
      },
    ],
  },
  {
    question: "Jurisprudence",
    answers: [
      { text: "Conundrum", correct: false },
      { text: "Grandiose  ", correct: false },
      { text: "Ubiquitous  ", correct: false },
      { text: "Warrant", correct: true },
    ],
  },
  {
    question: "Lament",
    answers: [
      { text: "Yakınmak   ", correct: true },
      { text: "Doğrulamak   ", correct: false },
      { text: "Birleştirmek   ", correct: false },
      { text: "Garanti etmek", correct: false },
    ],
  },
  {
    question: " Amalgamate ",
    answers: [
      { text: "Karmaşıklaştırmak  ", correct: false },
      { text: "Birleştirmek ", correct: true },
      { text: "Her yerde bulunan ", correct: false },
      { text: "Görkemli ", correct: false },
    ],
  },
  {
    question: "Ubiquitous ",
    answers: [
      { text: " Muamma ", correct: false },
      { text: "Kinestetik  ", correct: false },
      { text: "Her yerde bulunan   ", correct: true },
      { text: "İkilem", correct: false },
    ],
  },
  {
    question: "Meticulous ",
    answers: [
      { text: " Titiz ", correct: true },
      { text: "Uygun   ", correct: false },
      { text: "Bütüncül    ", correct: false },
      { text: "Görkemli", correct: false },
    ],
  },
  {
    question: "Bütünsel",
    answers: [
      { text: "Holistic   ", correct: true },
      { text: "Conundrum  ", correct: false },
      { text: "Facet  ", correct: false },
      { text: "Nebulous", correct: false },
    ],
  },
  {
    question: "Exacerbate",
    answers: [
      { text: "İkilem    ", correct: false },
      { text: "Kötüleştirmek  ", correct: true },
      { text: "Titiz     ", correct: false },
      { text: "Doğrulamak", correct: false },
    ],
  },
  {
    question: "Quandary",
    answers: [
      { text: " Yakınmak   ", correct: false },
      { text: "İkilem   ", correct: true },
      { text: "Karmaşıklaştırmak    ", correct: false },
      { text: "Görkemli ", correct: false },
    ],
  },
  {
    question: " Facet",
    answers: [
      { text: "Doğrulamak ", correct: false },
      { text: "İkilem    ", correct: false },
      { text: "Yön, cephe   ", correct: true },
      { text: "Garanti etmek", correct: false },
    ],
  },
  {
    question: "Nebulous",
    answers: [
      { text: " Her yerde bulunan    ", correct: false },
      { text: "Belirsiz    ", correct: true },
      { text: "Görkemli   ", correct: false },
      { text: "Kinestetik", correct: false },
    ],
  },
  {
    question: " Vindicate",
    answers: [
      { text: " Garanti etmek    ", correct: true },
      { text: "Bütüncül     ", correct: false },
      { text: "İkilem     ", correct: false },
      { text: "Yakınmak ", correct: false },
    ],
  },
  {
    question: " karmaşıklaştırmak ",
    answers: [
      { text: "Obfuscate    ", correct: true },
      { text: "Holistic   ", correct: false },
      { text: "Incongruous       ", correct: false },
      { text: "Meticulous", correct: false },
    ],
  },
  {
    question: "Warrant",
    answers: [
      { text: " Birleştirmek   ", correct: false },
      { text: "Belirsiz      ", correct: false },
      { text: "Garanti etmek    ", correct: true },
      { text: "Muamma  ", correct: false },
    ],
  },
  {
    question: " Gratify ",
    answers: [
      { text: "Yakınmak ", correct: false },
      { text: "Titiz   ", correct: false },
      { text: "Memnun etmek   ", correct: true },
      { text: " Doğrulamak   ", correct: false },
    ],
  },
  {
    question: " Zeal",
    answers: [
      { text: " Şevk, heves ", correct: true },
      { text: "Uygun    ", correct: false },
      { text: "Karmaşıklaştırmak     ", correct: false },
      { text: "Bütüncül  ", correct: false },
    ],
  },
  {
    question: "Yaymak",
    answers: [
      { text: "Disseminate   ", correct: true },
      { text: "Vindicate     ", correct: false },
      { text: "Mitigate     ", correct: false },
      { text: "Scrutinize  ", correct: false },
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
