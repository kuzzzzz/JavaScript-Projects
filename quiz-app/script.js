const quizData = [
  {
    question: "What is nancy's favourite food",
    a: "chicken and chips",
    b: "eba and eguisi soup",
    c: "starch and banga soup",
    d: "fried rice and chicken",
    correct: "a",
  },
  {
    question: "Who is the vice president of the US",
    a: "Bill gates",
    b: "Will smith",
    c: "Taylor swift",
    d: "Mike pence",
    correct: "d",
  },
  {
    question: "What is the most popular programming language in 2019",
    a: "HTML",
    b: "JavaScript",
    c: "Python",
    d: "Java",
    correct: "b",
  },
  {
    question: "What is the meaning of HTML",
    a: "High Time My Lover",
    b: "Heroplane Train Marbach Lambohgini",
    c: "HyperText Mark Up Language",
    d: "HyperText Make Up Language",
    correct: "c",
  },
  {
    question: "What is the meaning of SARs",
    a: "Special Arm robery Squad",
    b: "Special Army robery Squad",
    c: "Special Anti rober Square",
    d: "Special Anti robery Squard",
    correct: "d",
  },
  // {
  //   question: "What is the meaning of life",
  //   a: "To be alive",
  //   b: "To be rich",
  //   c: "To know peace",
  //   d: "To know love",
  //   correct: "d",
  // },
];

const quiz = document.getElementById("quiz");
const questionEl = document.querySelector(".questions");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.querySelector(".a_text");
const b_text = document.querySelector(".b_text");
const c_text = document.querySelector(".c_text");
const d_text = document.querySelector(".d_text");
const submitBtn = document.querySelector(".submit-button");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answersEl) => {
    answersEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.classList.add("quiz-result");
      if (score <= quizData.length - quizData.length / 2) {
        quiz.style.color = "red";
      } else if (score <= Math.ceil(quizData.length / 2)) {
        quiz.style.color = "orange";
      } else {
        quiz.style.color = "green";
      }
      quiz.innerHTML = `
      <h2> You answered ${score} correct out of ${quizData.length}</h2>
      <button style="margin-top:2rem;" onclick="location.reload()">Play again</button>
      `;
    }
  }
});
