const questions = [
  {
    question: "What fruit is commonly associated with the color orange?",
    answers: [
      { text: "Banana ", correct: false },
      { text: "Apple ", correct: false },
      { text: "Orange ", correct: true },
      { text: "Watermelon", correct: false },
    ],
  },
  {
    question: "What do you use to write with in school?",
    answers: [
      {
        text: "Rubber ",
        correct: false,
      },
      {
        text: "Pencil ",
        correct: true,
      },
      {
        text: "Book ",
        correct: false,
      },
      {
        text: "Notebook",
        correct: false,
      },
    ],
  },
  {
    question: "What animal is often considered man's best friend? ",
    answers: [
      {
        text: "Snake ",
        correct: false,
      },
      {
        text: "Bee ",
        correct: false,
      },
      {
        text: "Butterfly",
        correct: false,
      },
      {
        text: "Dog",
        correct: true,
      },
    ],
  },
  {
    question: " Where is the food cooked?",
    answers: [
      {
        text: "Kitchen ",
        correct: true,
      },
      {
        text: "Bedroom ",
        correct: false,
      },
      {
        text: "Living room",
        correct: false,
      },
      {
        text: "Bathroom",
        correct: false,
      },
    ],
  },
  {
    question:
      " What object provides shelter and is typically where people live?",
    answers: [
      { text: "Post office  ", correct: false },
      { text: "House  ", correct: true },
      { text: "School  ", correct: false },
      { text: "Museum", correct: false },
    ],
  },
  {
    question: " Which one do you use when making cakes?",
    answers: [
      { text: "Egg   ", correct: true },
      { text: "Eggplant   ", correct: false },
      { text: "Potato   ", correct: false },
      { text: "Tomato", correct: false },
    ],
  },
  {
    question:
      " What do you call the large celestial body that lights up the day sky?",
    answers: [
      { text: "Rain  ", correct: false },
      { text: "Moon ", correct: false },
      { text: "Snow ", correct: false },
      { text: "Sun", correct: true },
    ],
  },
  {
    question:
      " What do you feel when you care deeply for someone or something? ",
    answers: [
      { text: "Hate  ", correct: false },
      { text: "Fun  ", correct: false },
      { text: "Love  ", correct: true },
      { text: "Ask", correct: false },
    ],
  },
  {
    question: " What do you call the female ruler of a kingdom? ",
    answers: [
      { text: "King  ", correct: false },
      { text: "Postman   ", correct: false },
      { text: "Queen   ", correct: true },
      { text: "Worker", correct: false },
    ],
  },
  {
    question:
      " What do you use to navigate from one place to another by vehicle?",
    answers: [
      { text: "Taxi   ", correct: false },
      { text: "Road  ", correct: true },
      { text: "Car  ", correct: false },
      { text: "Ice", correct: false },
    ],
  },
  {
    question: "What do you typically drink at breakfast time?",
    answers: [
      { text: "Tea    ", correct: true },
      { text: "Coke  ", correct: false },
      { text: "Lemonade     ", correct: false },
      { text: "Energy drink", correct: false },
    ],
  },
  {
    question:
      " What animal is known for its agility and ability to climb trees?",
    answers: [
      { text: "Dog    ", correct: false },
      { text: "Lion   ", correct: false },
      { text: "Tiger    ", correct: false },
      { text: "Cat", correct: true },
    ],
  },
  {
    question: "  What is the time from sunset to sunrise called? ",
    answers: [
      { text: "Period ", correct: false },
      { text: "Night   ", correct: true },
      { text: "Afternoon   ", correct: false },
      { text: "Morning", correct: false },
    ],
  },
  {
    question:
      "  What do you call the structure that holds branches and leaves above ground?  ",
    answers: [
      { text: "Tree    ", correct: true },
      { text: "Mountain    ", correct: false },
      { text: "Cloud   ", correct: false },
      { text: "Gravity", correct: false },
    ],
  },
  {
    question:
      "   What do you call the frozen water that you use to cool drinks? ",
    answers: [
      { text: "Gas     ", correct: false },
      { text: "Liquid     ", correct: false },
      { text: "Solid     ", correct: false },
      { text: "Ice", correct: true },
    ],
  },
  {
    question: "  What do you read for enjoyment and education?  ",
    answers: [
      { text: "Book    ", correct: true },
      { text: "Notebook   ", correct: false },
      { text: "TV       ", correct: false },
      { text: "Diary", correct: false },
    ],
  },
  {
    question: "  Who is your father's wife?  ",
    answers: [
      { text: "Friend    ", correct: false },
      { text: "Mother     ", correct: true },
      { text: "Child    ", correct: false },
      { text: "Grandfather  ", correct: false },
    ],
  },
  {
    question: " What is the smallest unit of society? ",
    answers: [
      { text: "Government ", correct: false },
      { text: "Country   ", correct: false },
      { text: "District   ", correct: false },
      { text: "Family  ", correct: true },
    ],
  },
  {
    question: " What happens when fruit is squeezed?",
    answers: [
      { text: "Coke  ", correct: false },
      { text: "Tea    ", correct: false },
      { text: "Juice    ", correct: true },
      { text: "Water  ", correct: false },
    ],
  },
  {
    question: "What is the opposite of boy?",
    answers: [
      { text: "Man   ", correct: false },
      { text: "Guy     ", correct: false },
      { text: "Girl     ", correct: true },
      { text: "Child  ", correct: false },
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
