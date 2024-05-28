const questions = [
  {
    question:
      "In the context of international business, which term refers to activities conducted beyond national borders?",
    answers: [
      { text: "Abstract ", correct: false },
      { text: "Overseas ", correct: true },
      { text: "Guideline ", correct: false },
      { text: "Framework", correct: false },
    ],
  },
  {
    question:
      "What is the term for a systematic approach used to analyze and assess the effectiveness of a program or policy?",
    answers: [
      {
        text: "Evaluate ",
        correct: true,
      },
      {
        text: "Perspective ",
        correct: false,
      },
      {
        text: "Transitional ",
        correct: false,
      },
      {
        text: "Rational",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which term describes the process of reaching a compromise between conflicting parties?",
    answers: [
      {
        text: "Mediate ",
        correct: true,
      },
      {
        text: "Justify ",
        correct: false,
      },
      {
        text: "Diverse",
        correct: false,
      },
      {
        text: "Negotiate",
        correct: false,
      },
    ],
  },
  {
    question:
      " What is the term for a set of rules or principles that provide guidance for decision-making or behavior?",
    answers: [
      {
        text: "Guideline ",
        correct: true,
      },
      {
        text: "Significant ",
        correct: false,
      },
      {
        text: "Validate",
        correct: false,
      },
      {
        text: "Widespread",
        correct: false,
      },
    ],
  },
  {
    question:
      "What term describes a logical and reasonable approach to problem-solving or decision-making?",
    answers: [
      { text: "Hypothesis  ", correct: false },
      { text: "Rational", correct: true },
      { text: "Cohesive  ", correct: false },
      { text: "Implement", correct: false },
    ],
  },
  {
    question:
      "Which term refers to a broad idea or concept that is not based on specific examples or facts?",
    answers: [
      { text: "Abstract   ", correct: true },
      { text: "Perspective   ", correct: false },
      { text: "Undermine   ", correct: false },
      { text: "Evaluate", correct: false },
    ],
  },
  {
    question:
      " What term is used to describe something that has a broad impact and is present across a wide area or population?",
    answers: [
      { text: "Significant  ", correct: false },
      { text: "Transitional ", correct: false },
      { text: "Widespread ", correct: true },
      { text: "Mediate", correct: false },
    ],
  },
  {
    question:
      " What is the term for the process of putting a plan or idea into action? ",
    answers: [
      { text: "Implement  ", correct: true },
      { text: "Validate  ", correct: false },
      { text: "Negotiate  ", correct: false },
      { text: "Framework", correct: false },
    ],
  },
  {
    question:
      " Which term describes the act of confirming or verifying the accuracy or validity of something? ",
    answers: [
      { text: "Validate  ", correct: true },
      { text: "Diverse   ", correct: false },
      { text: "Justify   ", correct: false },
      { text: "Evaluate", correct: false },
    ],
  },
  {
    question:
      " What term is used to describe a period of change or adaptation from one state or condition to another?",
    answers: [
      { text: "Transitional   ", correct: true },
      { text: "Abstract  ", correct: false },
      { text: "Hypothesis  ", correct: false },
      { text: "Overseas", correct: false },
    ],
  },
  {
    question:
      "What term refers to the idea that a set of interconnected elements form a coherent whole?",
    answers: [
      { text: "Cohesive    ", correct: true },
      { text: "Perspective  ", correct: false },
      { text: "Undermine     ", correct: false },
      { text: "Briefing", correct: false },
    ],
  },
  {
    question:
      " Which term describes the process of providing essential information or instructions to someone?",
    answers: [
      { text: "Briefing     ", correct: true },
      { text: "Mediate   ", correct: false },
      { text: "Negotiate    ", correct: false },
      { text: "Rational", correct: false },
    ],
  },
  {
    question:
      " What term is used to describe the variety or range of different elements within a group or system?",
    answers: [
      { text: "Diverse ", correct: true },
      { text: "Guideline   ", correct: false },
      { text: "Significanct   ", correct: false },
      { text: "Validate", correct: false },
    ],
  },
  {
    question:
      " What term is used to justify the validity or correctness of a particular action or decision? ",
    answers: [
      { text: "Justify    ", correct: true },
      { text: "Implement    ", correct: false },
      { text: "Framework   ", correct: false },
      { text: "Abstract", correct: false },
    ],
  },
  {
    question:
      " Which term refers to a proposed explanation for a phenomenon that can be tested through research?",
    answers: [
      { text: "Hypothesis     ", correct: true },
      { text: "Evaluate     ", correct: false },
      { text: "Perspective     ", correct: false },
      { text: "Transitional", correct: false },
    ],
  },
  {
    question:
      " What term is used to describe something that gradually weakens or erodes the effectiveness of something else?  ",
    answers: [
      { text: "Undermine    ", correct: true },
      { text: "Rational   ", correct: false },
      { text: "Overseas       ", correct: false },
      { text: "Mediate", correct: false },
    ],
  },
  {
    question:
      " What term refers to a particular point of view or way of looking at things? ",
    answers: [
      { text: "Perspective    ", correct: true },
      { text: "Negotiate     ", correct: false },
      { text: "Widespread    ", correct: false },
      { text: "Cohesive  ", correct: false },
    ],
  },
  {
    question:
      "Which term describes a structured outline or plan that provides support for something? ",
    answers: [
      { text: "Framework ", correct: true },
      { text: "Validate   ", correct: false },
      { text: "Evaluate   ", correct: false },
      { text: "Significant  ", correct: false },
    ],
  },
  {
    question:
      "What term is used to describe something that is of great importance or consequence?",
    answers: [
      { text: "Significant  ", correct: true },
      { text: "Mediate    ", correct: false },
      { text: "Diverse    ", correct: false },
      { text: "Abstract  ", correct: false },
    ],
  },
  {
    question:
      "What term is used to describe a group of people or things that are closely united or integrated?",
    answers: [
      { text: "Cohesive   ", correct: true },
      { text: "Guideline     ", correct: false },
      { text: "Validate     ", correct: false },
      { text: "Transitional  ", correct: false },
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
