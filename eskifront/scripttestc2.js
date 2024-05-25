const questions = [
  {
    question:
      "What term refers to the act of spreading information or ideas widely and actively?",
    answers: [
      { text: "Vindicate ", correct: false },
      { text: "Kinesthetic ", correct: false },
      { text: " Disseminate  ", correct: true },
      { text: "Lament", correct: false },
    ],
  },
  {
    question:
      "Which term describes a situation where something becomes more complex or intense?",
    answers: [
      {
        text: " Holistic",
        correct: false,
      },
      {
        text: "Exacerbate  ",
        correct: true,
      },
      {
        text: "Conundrum ",
        correct: false,
      },
      {
        text: "Obfuscate",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the term for the comprehensive study or philosophy of law? ",
    answers: [
      {
        text: "Proliferate",
        correct: false,
      },
      {
        text: "Grandiose ",
        correct: false,
      },
      {
        text: "Amalgamate",
        correct: false,
      },
      {
        text: "Jurisprudence ",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which term refers to the process of combining or uniting multiple elements into one?",
    answers: [
      {
        text: "Amalgamate ",
        correct: true,
      },
      {
        text: "Meticulous ",
        correct: false,
      },
      {
        text: "Facet",
        correct: false,
      },
      {
        text: "Incongruous",
        correct: false,
      },
    ],
  },
  {
    question:
      "What term describes something that is widely present or found everywhere?",
    answers: [
      { text: "Ubiquitous", correct: true },
      { text: "Quandary  ", correct: false },
      { text: "Nebulous  ", correct: false },
      { text: "Facet", correct: false },
    ],
  },
  {
    question:
      "What is the term for a state of uncertainty or perplexity, especially regarding what to do?",
    answers: [
      { text: "Quandary   ", correct: true },
      { text: "Substantiate   ", correct: false },
      { text: "Warrant   ", correct: false },
      { text: "Grandiose", correct: false },
    ],
  },
  {
    question:
      " Which term describes a systematic approach that considers all parts of a complex system or situation?",
    answers: [
      { text: "Lament  ", correct: false },
      { text: "Exacerbate ", correct: false },
      { text: "Nebulous ", correct: false },
      { text: "Holistic ", correct: true },
    ],
  },
  {
    question:
      " What term refers to a statement or action that provides justification or assurance? ",
    answers: [
      { text: " Kinesthetic ", correct: false },
      { text: "Vindicate  ", correct: false },
      { text: "Warrant   ", correct: true },
      { text: "Disseminate", correct: false },
    ],
  },
  {
    question:
      "Which term describes something that is elaborate or impressive but often exaggerated or overdone? ",
    answers: [
      { text: " Obfuscate ", correct: false },
      { text: "Proliferate   ", correct: false },
      { text: "Grandiose    ", correct: true },
      { text: "Incongruous", correct: false },
    ],
  },
  {
    question:
      " What term is used to describe a feeling of sadness or regret, often expressed aloud?",
    answers: [
      { text: "Lament   ", correct: true },
      { text: "Substantiate  ", correct: false },
      { text: "Amalgamate  ", correct: false },
      { text: "Jurisprudence", correct: false },
    ],
  },
  {
    question:
      "What is the term for a situation or puzzle that is difficult to solve or understand?",
    answers: [
      { text: "Conundrum    ", correct: true },
      { text: "Facet  ", correct: false },
      { text: "Meticulous     ", correct: false },
      { text: "Ubiquitous", correct: false },
    ],
  },
  {
    question:
      "Which term describes the act of making something more complicated or unclear?",
    answers: [
      { text: " Holistic   ", correct: false },
      { text: "Kinesthetic   ", correct: false },
      { text: "Exacerbate    ", correct: false },
      { text: "Obfuscate ", correct: true },
    ],
  },
  {
    question:
      " What term refers to the process of rapidly increasing in number or spreading widely?",
    answers: [
      { text: "Incongruous ", correct: false },
      { text: "Proliferate    ", correct: true },
      { text: "Vindicate   ", correct: false },
      { text: "Disseminate", correct: false },
    ],
  },
  {
    question:
      " What term describes a part or aspect of something, especially one of several?  ",
    answers: [
      { text: "Facet    ", correct: true },
      { text: "Nebulous    ", correct: false },
      { text: "Quandary   ", correct: false },
      { text: "Warrant", correct: false },
    ],
  },
  {
    question:
      " Which term describes a meticulous or extremely careful attention to detail?",
    answers: [
      { text: " Amalgamate    ", correct: false },
      { text: "Jurisprudence     ", correct: false },
      { text: "Grandiose     ", correct: false },
      { text: "Meticulous ", correct: true },
    ],
  },
  {
    question:
      " What is the term for something that is unclear, vague, or lacking definite form? ",
    answers: [
      { text: "Nebulous    ", correct: true },
      { text: "Kinesthetic   ", correct: false },
      { text: "Conundrum       ", correct: false },
      { text: "Ubiquitous", correct: false },
    ],
  },
  {
    question:
      " What term refers to the act of providing evidence or proof to support a claim or idea?",
    answers: [
      { text: " Lament   ", correct: false },
      { text: "Substantiate      ", correct: true },
      { text: "Obfuscate    ", correct: false },
      { text: "Quandary  ", correct: false },
    ],
  },
  {
    question:
      " Which term describes something that is out of place or inconsistent with its surroundings? ",
    answers: [
      { text: "Facet ", correct: false },
      { text: "Exacerbate   ", correct: false },
      { text: "Holistic   ", correct: false },
      { text: " Incongruous   ", correct: true },
    ],
  },
  {
    question:
      " What term is used to describe a sense of movement or activity involving physical sensations?",
    answers: [
      { text: " Disseminate ", correct: false },
      { text: "Warrant    ", correct: false },
      { text: "Kinesthetic     ", correct: true },
      { text: "Vindicate  ", correct: false },
    ],
  },
  {
    question:
      "What is the term for the act of proving that someone is right or justified in their actions?",
    answers: [
      { text: "Vindicate   ", correct: true },
      { text: "Warrant     ", correct: false },
      { text: "Meticulous     ", correct: false },
      { text: "Amalgamate  ", correct: false },
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
