const questions = [
  {
    question: " What mode of transportation requires pedaling to move forward?",
    answers: [
      { text: "Car  ", correct: false },
      { text: "Train   ", correct: false },
      { text: "Plane  ", correct: false },
      { text: "Bicycle", correct: true },
    ],
  },
  {
    question: " What do you feel when you're eagerly anticipating something?",
    answers: [
      {
        text: "Bored  ",
        correct: false,
      },
      {
        text: "Excited  ",
        correct: true,
      },
      {
        text: "Frightened  ",
        correct: false,
      },
      {
        text: "Angry",
        correct: false,
      },
    ],
  },
  {
    question:
      "What type of dwelling typically has all rooms on the same level?  ",
    answers: [
      {
        text: "Flat  ",
        correct: true,
      },
      {
        text: "Villa  ",
        correct: false,
      },
      {
        text: "Detached house",
        correct: false,
      },
      {
        text: "Field",
        correct: false,
      },
    ],
  },
  {
    question: " What type of fruit is commonly used to make wine?",
    answers: [
      {
        text: "Melon  ",
        correct: false,
      },
      {
        text: "Watermelon  ",
        correct: false,
      },
      {
        text: "Grape ",
        correct: true,
      },
      {
        text: "Cherry",
        correct: false,
      },
    ],
  },
  {
    question: "Where do you go when you need medical attention?",
    answers: [
      { text: "Stadium  ", correct: false },
      { text: "Hospital   ", correct: true },
      { text: "Pharmacy   ", correct: false },
      { text: "Dispensary", correct: false },
    ],
  },
  {
    question:
      " What do you receive when someone wants you to join them for an event?",
    answers: [
      { text: "Bag    ", correct: false },
      { text: "Invitation    ", correct: true },
      { text: "Money    ", correct: false },
      { text: "Love", correct: false },
    ],
  },
  {
    question: " Which type of vehicle consists of wagons?",
    answers: [
      { text: "Train   ", correct: true },
      { text: "Ship  ", correct: false },
      { text: "Plane  ", correct: false },
      { text: "Car", correct: false },
    ],
  },
  {
    question: " Which one can you fly on a windy day? ",
    answers: [
      { text: "Car   ", correct: false },
      { text: "Bot   ", correct: false },
      { text: "Kite   ", correct: true },
      { text: "Cloud", correct: false },
    ],
  },
  {
    question: " What do you carry with you when you travel? ",
    answers: [
      { text: "Luggage   ", correct: true },
      { text: "Horse    ", correct: false },
      { text: "Human    ", correct: false },
      { text: "House", correct: false },
    ],
  },
  {
    question:
      "  What geographical feature is often climbed for sport or recreation?",
    answers: [
      { text: "Tree    ", correct: false },
      { text: "Lake    ", correct: false },
      { text: "Sea   ", correct: false },
      { text: "Mountain", correct: true },
    ],
  },
  {
    question: "What piece of jewelry is worn around the neck?",
    answers: [
      { text: "Knee pad     ", correct: false },
      { text: "Bracelet   ", correct: false },
      { text: "Glasses      ", correct: false },
      { text: "Necklace", correct: true },
    ],
  },
  {
    question: "  What vast body of water covers much of the Earth's surface?",
    answers: [
      { text: "Sea     ", correct: false },
      { text: "Ocean    ", correct: true },
      { text: "Lake     ", correct: false },
      { text: "River", correct: false },
    ],
  },
  {
    question: " Where do people go to relax and enjoy outdoor activities? ",
    answers: [
      { text: "School  ", correct: false },
      { text: "Library    ", correct: false },
      { text: "Park     ", correct: true },
      { text: "Car park", correct: false },
    ],
  },
  {
    question: "  What adjective describes a place with little to no noise? ",
    answers: [
      { text: "Noisy     ", correct: false },
      { text: "Loudly     ", correct: false },
      { text: "Volume    ", correct: false },
      { text: "Quiet", correct: true },
    ],
  },
  {
    question:
      "  Where do people go to dine out and enjoy a meal they didn't cook themselves? ",
    answers: [
      { text: "Park      ", correct: false },
      { text: "Restaurant      ", correct: true },
      { text: "University      ", correct: false },
      { text: "Cafe", correct: false },
    ],
  },
  {
    question:
      "  What food category includes items like carrots, broccoli, and spinach?   ",
    answers: [
      { text: "Fruit     ", correct: false },
      { text: "Eat    ", correct: false },
      { text: "Vegetable        ", correct: true },
      { text: "Fast-food", correct: false },
    ],
  },
  {
    question:
      "  What adjective describes something that doesn't cost much money?",
    answers: [
      { text: "Cheap     ", correct: true },
      { text: "Expensive      ", correct: false },
      { text: "Sale     ", correct: false },
      { text: "Raise  ", correct: false },
    ],
  },
  {
    question: "  What do you call a delicious meal?  ",
    answers: [
      { text: "Taste  ", correct: false },
      { text: "Food    ", correct: false },
      { text: "Delicious    ", correct: true },
      { text: "Awful  ", correct: false },
    ],
  },
  {
    question: "The Wall ……. . A newspaper in England.",
    answers: [
      { text: "Country   ", correct: false },
      { text: "District     ", correct: false },
      { text: "Market     ", correct: false },
      { text: "Street  ", correct: true },
    ],
  },
  {
    question: " …….. to the Center of the Earth. A novel of Jules Verne. ",
    answers: [
      { text: "Journey    ", correct: true },
      { text: "Teleportation      ", correct: false },
      { text: "Evolution      ", correct: false },
      { text: "Shoot  ", correct: false },
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
