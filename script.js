// ================= SHUFFLE =================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ================= DATA =================
// ================= DATA =================
const quizData = {
  jawa: [
    {
      question: "Rumah adat Jawa?",
      answers: [
        { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Joglo_house.jpg" },
        { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Honai_house.jpg" },
        { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rumah_Gadang.jpg" },
        { text: "Limas", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Rumah_Limas.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Makanan khas Jawa?",
      answers: [
        { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Gudeg.jpg" },
        { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Papeda.jpg" },
        { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rendang.jpg" },
        { text: "Sate", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Sate.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Pakaian adat Jawa?",
      answers: [
        { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Kebaya.jpg" },
        { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ulos.jpg" },
        { text: "Koteka", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Koteka.jpg" },
        { text: "Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Baju_Bodo.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Tarian Jawa?",
      answers: [
        { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Serimpi.jpg" },
        { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kecak.jpg" },
        { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Saman.jpg" },
        { text: "Piring", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tari_Piring.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Senjata Jawa?",
      answers: [
        { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Keris.jpg" },
        { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mandau.jpg" },
        { text: "Badik", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Badik.jpg" },
        { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Rencong.jpg" },
      ],
      correct: 0,
    },
    
  ],
  sumatra: [
  {
    question: "Rumah adat Sumatra?",
    answers: [
      { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rumah_Gadang.jpg" },
      { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Joglo_house.jpg" },
      { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Honai_house.jpg" },
      { text: "Lamin", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rumah_Lamin.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Makanan khas Sumatra?",
    answers: [
      { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rendang.jpg" },
      { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Gudeg.jpg" },
      { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Papeda.jpg" },
      { text: "Rawon", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Rawon.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Pakaian adat Sumatra?",
    answers: [
      { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ulos.jpg" },
      { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Kebaya.jpg" },
      { text: "Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Baju_Bodo.jpg" },
      { text: "Koteka", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Koteka.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Tarian Sumatra?",
    answers: [
      { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Saman.jpg" },
      { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kecak.jpg" },
      { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Serimpi.jpg" },
      { text: "Piring", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tari_Piring.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Senjata Sumatra?",
    answers: [
      { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Rencong.jpg" },
      { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Keris.jpg" },
      { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mandau.jpg" },
      { text: "Badik", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Badik.jpg" },
    ],
    correct: 0,
  },
],

kalimantan: [
  {
    question: "Rumah adat Kalimantan?",
    answers: [
      { text: "Lamin", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rumah_Lamin.jpg" },
      { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Joglo_house.jpg" },
      { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rumah_Gadang.jpg" },
      { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Honai_house.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Makanan khas Kalimantan?",
    answers: [
      { text: "Soto Banjar", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Soto_Banjar.jpg" },
      { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Gudeg.jpg" },
      { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rendang.jpg" },
      { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Papeda.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Pakaian adat Kalimantan?",
    answers: [
      { text: "Ta'a", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Pakaian_Taa.jpg" },
      { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ulos.jpg" },
      { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Kebaya.jpg" },
      { text: "Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Baju_Bodo.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Tarian Kalimantan?",
    answers: [
      { text: "Kancet Ledo", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kancet_Ledo.jpg" },
      { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Saman.jpg" },
      { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kecak.jpg" },
      { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Serimpi.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Senjata Kalimantan?",
    answers: [
      { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mandau.jpg" },
      { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Keris.jpg" },
      { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Rencong.jpg" },
      { text: "Badik", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Badik.jpg" },
    ],
    correct: 0,
  },
],

sulawesi: [
  {
    question: "Rumah adat Sulawesi?",
    answers: [
      { text: "Tongkonan", image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tongkonan.jpg" },
      { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Joglo_house.jpg" },
      { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rumah_Gadang.jpg" },
      { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Honai_house.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Makanan khas Sulawesi?",
    answers: [
      { text: "Coto Makassar", image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Coto_Makassar.jpg" },
      { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rendang.jpg" },
      { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Gudeg.jpg" },
      { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Papeda.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Pakaian adat Sulawesi?",
    answers: [
      { text: "Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Baju_Bodo.jpg" },
      { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ulos.jpg" },
      { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Kebaya.jpg" },
      { text: "Koteka", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Koteka.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Tarian Sulawesi?",
    answers: [
      { text: "Pakarena", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Tari_Pakarena.jpg" },
      { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Saman.jpg" },
      { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kecak.jpg" },
      { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Serimpi.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Senjata Sulawesi?",
    answers: [
      { text: "Badik", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Badik.jpg" },
      { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Keris.jpg" },
      { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mandau.jpg" },
      { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Rencong.jpg" },
    ],
    correct: 0,
  },
],

papua: [
  {
    question: "Rumah adat Papua?",
    answers: [
      { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Honai_house.jpg" },
      { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Joglo_house.jpg" },
      { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rumah_Gadang.jpg" },
      { text: "Tongkonan", image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tongkonan.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Makanan khas Papua?",
    answers: [
      { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Papeda.jpg" },
      { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Gudeg.jpg" },
      { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rendang.jpg" },
      { text: "Soto", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Soto.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Pakaian adat Papua?",
    answers: [
      { text: "Koteka", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Koteka.jpg" },
      { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Kebaya.jpg" },
      { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ulos.jpg" },
      { text: "Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Baju_Bodo.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Tarian Papua?",
    answers: [
      { text: "Yospan", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Yospan.jpg" },
      { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Saman.jpg" },
      { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kecak.jpg" },
      { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Serimpi.jpg" },
    ],
    correct: 0,
  },
  {
    question: "Senjata Papua?",
    answers: [
      { text: "Busur dan Panah", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Panah_Papua.jpg" },
      { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Keris.jpg" },
      { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mandau.jpg" },
      { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Rencong.jpg" },
    ],
    correct: 0,
  },
],

};

// ================= STATE =================
let currentRegion = "";
let currentGroup = "";
let currentQuestion = 0;
let score = 0;

let usedRegions = [];
let usedGroups = []; // 🔥 TIDAK DI RESET
let scores = {};

let answered = false;

// ================= PILIH PULAU =================
function selectRegion(region) {
  if (usedRegions.includes(region)) return alert("Pulau sudah dikerjakan!");

  currentRegion = region;
  currentGroup = "";
  currentQuestion = 0;
  score = 0;
  answered = false;

  document.getElementById("answers").innerHTML = "";
  document.getElementById("question").innerText = "";

  document.getElementById("mapPage").style.display = "none";
  document.getElementById("groupPage").style.display = "block";

  loadGroups();
}

// ================= UPDATE BUTTON PULAU =================
function updateRegionButtons() {
  usedRegions.forEach(region => {
    const btn = document.getElementById("btn-" + region);
    if (btn) {
      btn.disabled = true;
      btn.classList.add("disabled");
    }
  });
}

// ================= KELOMPOK =================
function loadGroups() {
  const groupList = document.getElementById("groupList");
  groupList.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button");
    btn.innerText = "Kelompok " + i;

    if (usedGroups.includes(i)) {
      btn.disabled = true;
      btn.classList.add("disabled");
    }

    btn.onclick = () => startQuiz(i);
    groupList.appendChild(btn);
  }
}

// ================= START =================
function startQuiz(group) {
  if (usedGroups.includes(group)) return alert("Kelompok sudah bermain!");

  currentGroup = group;
  usedGroups.push(group);

  currentQuestion = 0;
  score = 0;

  document.getElementById("groupPage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";

  loadQuestion();
}

// ================= LOAD =================
function loadQuestion() {
  answered = false;

  const data = quizData[currentRegion][currentQuestion];
  document.getElementById("question").innerText = data.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  let shuffled = [...data.answers];
  const correctAnswer = shuffled[data.correct];

  shuffleArray(shuffled);

  const correctIndex = shuffled.findIndex(a => a.text === correctAnswer.text);
  answersDiv.dataset.correct = correctIndex;

  const labels = ["A", "B", "C", "D"];

  shuffled.forEach((ans, i) => {
    const card = document.createElement("div");
    card.className = "answer-card";

    card.innerHTML = `
      <p><b>${labels[i]}</b>. ${ans.text}</p>
      <img src="${ans.image}">
    `;

    card.onclick = () => checkAnswer(i);
    answersDiv.appendChild(card);
  });
}

// ================= CHECK =================
function checkAnswer(index) {
  if (answered) return;
  answered = true;

  const correct = parseInt(document.getElementById("answers").dataset.correct);
  const cards = document.querySelectorAll(".answer-card");

  cards.forEach((c, i) => {
    if (i === correct) c.classList.add("correct");
    else if (i === index) c.classList.add("wrong");

    c.style.pointerEvents = "none";
  });

  if (index === correct) score++;

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < 5) {
      loadQuestion();
    } else {
      finishQuiz();
    }
  }, 1000);
}

// ================= FINISH =================
function finishQuiz() {
  scores["Kelompok " + currentGroup] = score;
  usedRegions.push(currentRegion);

  updateRegionButtons(); // 🔥 disable pulau

  document.getElementById("quizPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";

  document.getElementById("scoreText").innerText =
    `Kelompok ${currentGroup} - Skor: ${score}/5`;
}

// ================= BACK =================
function backToMap() {
  document.getElementById("resultPage").style.display = "none";

  if (usedRegions.length === Object.keys(quizData).length) {
    showLeaderboard();
  } else {
    document.getElementById("mapPage").style.display = "block";
  }
}

// ================= LEADERBOARD =================
function showLeaderboard() {
  document.getElementById("leaderboardPage").style.display = "block";

  const board = document.getElementById("leaderboard");
  board.innerHTML = "";

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  sorted.forEach((item, i) => {
    const div = document.createElement("div");

    let medal = "";
    if (i === 0) medal = "🥇";
    else if (i === 1) medal = "🥈";
    else if (i === 2) medal = "🥉";

    div.innerText = `${medal} ${i + 1}. ${item[0]} - ${item[1]} poin`;
    board.appendChild(div);
  });
  // ================= GLOBAL FIX =================
window.selectRegion = selectRegion;
window.backToMap = backToMap;
}