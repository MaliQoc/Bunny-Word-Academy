const questions = [
  {
    question: " What type of document provides a concise overview of a topic?",
    answers: [
      { text: "Brief  ", correct: true },
      { text: "Novel  ", correct: false },
      { text: "Story  ", correct: false },
      { text: "Note", correct: false },
    ],
  },
  {
    question:
      " What activity involves discussing opposing viewpoints on a particular topic?",
    answers: [
      {
        text: "Deal  ",
        correct: false,
      },
      {
        text: "Peace  ",
        correct: false,
      },
      {
        text: "War  ",
        correct: false,
      },
      {
        text: "Debate",
        correct: true,
      },
    ],
  },
  {
    question:
      "What adjective describes matters related to money and finances?  ",
    answers: [
      {
        text: "Sport  ",
        correct: false,
      },
      {
        text: "News  ",
        correct: false,
      },
      {
        text: "Financial ",
        correct: true,
      },
      {
        text: "Education",
        correct: false,
      },
    ],
  },
  {
    question:
      "  Who is responsible for making and enforcing laws in a country? ",
    answers: [
      {
        text: "Government  ",
        correct: true,
      },
      {
        text: "Teacher  ",
        correct: false,
      },
      {
        text: "Mayor ",
        correct: false,
      },
      {
        text: "Lawyer",
        correct: false,
      },
    ],
  },
  {
    question:
      "  What do you need to maintain to lead a fulfilling and balanced life?",
    answers: [
      { text: "Crime  ", correct: false },
      { text: "Health   ", correct: true },
      { text: "Darned   ", correct: false },
      { text: "Accident", correct: false },
    ],
  },
  {
    question: "What is the synonym of impress?",
    answers: [
      { text: "Invitation    ", correct: false },
      { text: "Implement    ", correct: false },
      { text: "Improve    ", correct: false },
      { text: "Influence", correct: true },
    ],
  },
  {
    question: " How are newspapers printed? ",
    answers: [
      { text: "Weekly   ", correct: false },
      { text: "Yearly  ", correct: false },
      { text: "Centennial  ", correct: false },
      { text: "Journal", correct: true },
    ],
  },
  {
    question: "What do you gain through study or experience?  ",
    answers: [
      { text: "Knowledge   ", correct: true },
      { text: "Human   ", correct: false },
      { text: "Leisure   ", correct: false },
      { text: "Work", correct: false },
    ],
  },
  {
    question:
      "  What term describes a group of people who make up less than half of a population? ",
    answers: [
      { text: "Human   ", correct: false },
      { text: "Animal    ", correct: false },
      { text: "Plant    ", correct: false },
      { text: "Minority", correct: true },
    ],
  },
  {
    question:
      "  What literary form tells a fictional story with complex characters and plotlines?",
    answers: [
      { text: "Novel   ", correct: true },
      { text: "Story   ", correct: false },
      { text: "Poetry   ", correct: false },
      { text: "Theatre", correct: false },
    ],
  },
  {
    question:
      "What do you want to minimize to preserve the purity of the air and water? ",
    answers: [
      { text: "Money     ", correct: false },
      { text: "Animal", correct: false },
      { text: "Children      ", correct: false },
      { text: "Pollution", correct: true },
    ],
  },
  {
    question: " What do you need to develop to perform tasks effectively? ",
    answers: [
      { text: "Shoot     ", correct: false },
      { text: "Pass    ", correct: false },
      { text: "Strut     ", correct: false },
      { text: "Skill", correct: true },
    ],
  },
  {
    question:
      "  What customs or practices are passed down through generations in a culture? ",
    answers: [
      { text: "Tradition  ", correct: true },
      { text: "Inovation    ", correct: false },
      { text: "Regeneration    ", correct: false },
      { text: "Fashion", correct: false },
    ],
  },
  {
    question: " What is the synonym of success?  ",
    answers: [
      { text: "Achieve     ", correct: true },
      { text: "Lose     ", correct: false },
      { text: "Defeat    ", correct: false },
      { text: "Washout", correct: false },
    ],
  },
  {
    question: "  What is the opposite of producing? ",
    answers: [
      { text: "Product      ", correct: false },
      { text: "Harvest      ", correct: false },
      { text: "Crop      ", correct: false },
      { text: "Consume", correct: true },
    ],
  },
  {
    question: " What do you get when you're done? ",
    answers: [
      { text: "Leisure     ", correct: true },
      { text: "Work    ", correct: false },
      { text: "Worker        ", correct: false },
      { text: "Time", correct: false },
    ],
  },
  {
    question:
      "  What do you need to seize when it presents itself unexpectedly? ",
    answers: [
      { text: "Air     ", correct: false },
      { text: "Hand      ", correct: false },
      { text: "Ball     ", correct: false },
      { text: "Opportunity  ", correct: true },
    ],
  },
  {
    question:
      "What do you expect from a product to ensure it meets your standards? ",
    answers: [
      { text: "Love  ", correct: false },
      { text: "Money    ", correct: false },
      { text: "Quality    ", correct: true },
      { text: "Experiment  ", correct: false },
    ],
  },
  {
    question:
      "What do you strive to protect for the well-being of future generations? ",
    answers: [
      { text: "Environment   ", correct: true },
      { text: "Money     ", correct: false },
      { text: "House     ", correct: false },
      { text: "Career  ", correct: false },
    ],
  },
  {
    question:
      "What do governments need to manage sustainably to support their economies? ",
    answers: [
      { text: "Laws    ", correct: false },
      { text: "Resources      ", correct: true },
      { text: "President      ", correct: false },
      { text: "Prime minister  ", correct: false },
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
