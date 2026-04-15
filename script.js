const quizData = {
  papua: [
    {
      question: "Apa rumah adat Papua?",
      answers: [
        { text: "Honai", image: "assets/honai.jpg" },
        { text: "Joglo", image: "assets/joglo.jpg" },
        { text: "Gadang", image: "assets/gadang.jpg" },
        { text: "Limas", image: "assets/limas.jpg" }
      ],
      correct: 0
    },
    {
      question: "Apa pakaian adat Papua?",
      answers: [
        { text: "Koteka", image: "assets/koteka.jpg" },
        { text: "Kebaya", image: "assets/kebaya.jpg" },
        { text: "Ulos", image: "assets/ulos.jpg" },
        { text: "Batik", image: "assets/batik.jpg" }
      ],
      correct: 0
    }
  ],

  jawa: [
    {
      question: "Rumah adat Jawa?",
      answers: [
        { text: "Joglo", image: "assets/joglo.jpg" },
        { text: "Honai", image: "assets/honai.jpg" },
        { text: "Limas", image: "assets/limas.jpg" },
        { text: "Gadang", image: "assets/gadang.jpg" }
      ],
      correct: 0
    },
    {
      question: "Makanan khas Jawa?",
      answers: [
        { text: "Gudeg", image: "assets/gudeg.jpg" },
        { text: "Papeda", image: "assets/papeda.jpg" },
        { text: "Rendang", image: "assets/rendang.jpg" },
        { text: "Sate Lilit", image: "assets/sate.jpg" }
      ],
      correct: 0
    }
  ]
};

let currentRegion = "";
let currentQuestion = 0;

function startQuiz(region) {
  currentRegion = region;
  currentQuestion = 0;

  document.getElementById("mapPage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";

  loadQuestion();
}

function loadQuestion() {
  const data = quizData[currentRegion][currentQuestion];
  document.getElementById("question").innerText = data.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  const labels = ["A", "B", "C", "D"];

  data.answers.forEach((answer, index) => {
    const card = document.createElement("div");
    card.className = "answer-card";

    card.innerHTML = `
      <p><b>${labels[index]}</b>. ${answer.text}</p>
      <img src="${answer.image}" alt="${answer.text}">
    `;

    card.onclick = () => checkAnswer(index, card);

    answersDiv.appendChild(card);
  });
}

function checkAnswer(index, element) {
  const correct = quizData[currentRegion][currentQuestion].correct;
  const cards = document.querySelectorAll(".answer-card");

  cards.forEach((card, i) => {
    if (i === correct) {
      card.classList.add("correct");
    } else if (i === index) {
      card.classList.add("wrong");
    }
    card.style.pointerEvents = "none";
  });

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < quizData[currentRegion].length) {
      loadQuestion();
    } else {
      alert("Quiz selesai!");
      document.getElementById("quizPage").style.display = "none";
      document.getElementById("mapPage").style.display = "block";
    }
  }, 1000);
}