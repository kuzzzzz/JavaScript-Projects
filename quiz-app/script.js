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
    correct: "a",
  },
  {
    question: "What is the meaning of SARs",
    a: "Special Arm robery Squad",
    b: "Special Army robery Squad",
    c: "Special Anti rober Square",
    d: "Special Anti robery Squard",
    correct: "d",
  },
];

const questionEl = document.querySelector(".questions");

const a_text = document.querySelector(".a_text");
const b_text = document.querySelector(".b_text");
const c_text = document.querySelector(".c_text");
const d_text = document.querySelector(".d_text");
const submitBtn = document.querySelector(".submit-button");

let currentQuiz = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    console.log(answer.checked);
  });
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  getSelected();
});
