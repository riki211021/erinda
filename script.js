// ============ DATA ============
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

const quizData = {
  sumatra: [
    {
      question: "Rumah adat dari Sumatra Barat yang memiliki atap menyerupai tanduk kerbau disebut …. ",
      answers: [
        { text: "Rumah Joglo" },
        { text: "Rumah Gadang" },
        { text: "Rumah Honai" },
        { text: "Rumah Limas" },
      ],
      correct: 1,
    },
    {
      question: "Tari Saman berasal dari daerah …. ",
      answers: [
        { text: "Sumatra Barat" },
        { text: "Aceh" },
        { text: "Lampung" },
        { text: "Riau" },
      ],
      correct: 1,
    },
    {
      question: "Pakaian adat Ulos berasal dari suku …. ",
      answers: [
        { text: "Minangkabau" },
        { text: "Batak" },
        { text: "Melayu" },
        { text: "Jawa" },
      ],
      correct: 1,
    },
    {
      question: "Bahasa Minangkabau digunakan oleh masyarakat di …. ",
      answers: [
        { text: "Aceh" },
        { text: "Sumatra Barat" },
        { text: "Sumatra Selatan" },
        { text: "Bengkulu" },
      ],
      correct: 1,
    },
  ],

  jawa: [
    {
      question: "Makanan khas dari Jawa Timur yang terkenal dengan kuah hitamnya adalah …. ",
      answers: [
        { text: "Soto" },
        { text: "Rawon" },
        { text: "Gudeg" },
        { text: "Pempek" },
      ],
      correct: 1,
    },
    {
      question: "Tari tradisional yang berasal dari Jawa Tengah adalah …. ",
      answers: [
        { text: "Tari Saman" },
        { text: "Tari Kecak" },
        { text: "Tari Serimpi" },
        { text: "Tari Piring" },
      ],
      correct: 2,
    },
    {
      question: "Rumah adat khas Jawa Tengah yang memiliki bentuk atap khas adalah …. ",
      answers: [
        { text: "Rumah Gadang" },
        { text: "Rumah Joglo" },
        { text: "Rumah Honai" },
        { text: "Rumah Limas" },
      ],
      correct: 1,
    },
    {
      question: "Senjata tradisional khas dari Pulau Jawa adalah …. ",
      answers: [
        { text: "Mandau" },
        { text: "Keris" },
        { text: "Rencong" },
        { text: "Parang" },
      ],
      correct: 1,
    },
  ],

  kalimantan: [
    {
      question: "Senjata tradisional khas dari Kalimantan adalah …. ",
      answers: [
        { text: "Keris" },
        { text: "Mandau" },
        { text: "Rencong" },
        { text: "Kujang" },
      ],
      correct: 1,
    },
    {
      question: "Salah satu tarian tradisional dari Kalimantan Timur adalah …. ",
      answers: [
        { text: "Tari Kecak" },
        { text: "Tari Saman" },
        { text: "Tari Hudoq" },
        { text: "Tari Piring" },
      ],
      correct: 2,
    },
    {
      question: "Rumah adat suku Dayak di Kalimantan yang berbentuk panjang disebut …. ",
      answers: [
        { text: "Rumah Gadang" },
        { text: "Rumah Joglo" },
        { text: "Rumah Panjang" },
        { text: "Rumah Honai" },
      ],
      correct: 2,
    },
    {
      question: "Pakaian adat suku Dayak biasanya dihiasi dengan …. ",
      answers: [
        { text: "Bulu burung dan manik-manik" },
        { text: "Kain songket" },
        { text: "Batik tulis" },
        { text: "Tenun ikat" },
      ],
      correct: 0,
    },
  ],

  sulawesi: [
    {
      question: "Rumah adat khas Sulawesi Selatan yang memiliki bentuk seperti perahu adalah …. ",
      answers: [
        { text: "Rumah Joglo" },
        { text: "Rumah Gadang" },
        { text: "Rumah Tongkonan" },
        { text: "Rumah Panjang" },
      ],
      correct: 2,
    },
    {
      question: "Tari tradisional yang berasal dari Sulawesi Selatan adalah …. ",
      answers: [
        { text: "Tari Piring" },
        { text: "Tari Kipas Pakarena" },
        { text: "Tari Saman" },
        { text: "Tari Jaipong" },
      ],
      correct: 1,
    },
    {
      question: "Senjata tradisional khas dari Sulawesi adalah …. ",
      answers: [
        { text: "Mandau" },
        { text: "Badik" },
        { text: "Keris" },
        { text: "Rencong" },
      ],
      correct: 1,
    },
    {
      question: "Pakaian adat dari Sulawesi Utara adalah …. ",
      answers: [
        { text: "Baju Bodo" },
        { text: "Ulos" },
        { text: "Laku Tepu" },
        { text: "Kebaya" },
      ],
      correct: 2,
    },
  ],

  papua: [
    {
      question: "Rumah adat khas Papua yang berbentuk bulat dan beratap jerami adalah …. ",
      answers: [
        { text: "Rumah Joglo" },
        { text: "Rumah Honai" },
        { text: "Rumah Gadang" },
        { text: "Rumah Panjang" },
      ],
      correct: 1,
    },
    {
      question: "Pakaian adat tradisional Papua yang digunakan oleh laki-laki adalah …. ",
      answers: [
        { text: "Ulos" },
        { text: "Koteka" },
        { text: "Kebaya" },
        { text: "Baju Bodo" },
      ],
      correct: 1,
    },
    {
      question: "Salah satu tarian tradisional dari Papua adalah …. ",
      answers: [
        { text: "Tari Saman" },
        { text: "Tari Piring" },
        { text: "Tari Yospan" },
        { text: "Tari Jaipong" },
      ],
      correct: 2,
    },
    {
      question: "Alat musik tradisional khas Papua yang terbuat dari kayu dan dimainkan dengan cara dipukul adalah …. ",
      answers: [
        { text: "Angklung" },
        { text: "Tifa" },
        { text: "Gamelan" },
        { text: "Sasando" },
      ],
      correct: 1,
    },
  ],
};

// ============ STATE ============
let currentRegion = "",
  currentGroup = "",
  currentQuestion = 0,
  score = 0;
let usedRegions = [],
  usedGroups = [],
  scores = {};
let answered = false;

const regionEmoji = { sumatra: "🌋", jawa: "🏯", kalimantan: "🌳", sulawesi: "🐚", papua: "🦜" };
const regionLabel = { sumatra: "Sumatra", jawa: "Jawa", kalimantan: "Kalimantan", sulawesi: "Sulawesi", papua: "Papua" };
const groupIcons = ["🦁", "🐯", "🦊", "🐺", "🦅"];
const groupColors = ["linear-gradient(135deg,#7c3aed,#a78bfa)", "linear-gradient(135deg,#ec4899,#fb7185)", "linear-gradient(135deg,#f59e0b,#fbbf24)", "linear-gradient(135deg,#0d9488,#34d399)", "linear-gradient(135deg,#0ea5e9,#38bdf8)"];

// ============ PAGES ============
function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  const el = document.getElementById(id);
  el.classList.add("active");
  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = "";
}

// ============ TOAST ============
function showToast(msg, dur = 2200) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove("show"), dur);
}

// ============ CONFETTI ============
function spawnConfetti() {
  const colors = ["#7c3aed", "#ec4899", "#f59e0b", "#0d9488", "#0ea5e9", "#34d399", "#fb7185"];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti-piece";
    c.style.cssText = `left:${Math.random() * 100}vw;top:0;background:${colors[i % colors.length]};width:${6 + Math.random() * 8}px;height:${6 + Math.random() * 8}px;border-radius:${Math.random() > 0.5 ? "50%" : "2px"};--dur:${1.5 + Math.random() * 2}s;--delay:${Math.random() * 0.8}s`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3500);
  }
}

// ============ MAP / REGION ============
function selectRegion(region) {
  if (usedRegions.includes(region)) {
    showToast("Pulau " + regionLabel[region] + " sudah selesai! 🏁");
    return;
  }
  currentRegion = region;
  document.getElementById("groupEmoji").textContent = regionEmoji[region];
  document.getElementById("groupRegionTitle").textContent = "📍 " + regionLabel[region];
  loadGroups();
  showPage("groupPage");
}

function goToMap() {
  showPage("mapPage");
}

function updateRegionButtons() {
  usedRegions.forEach((r) => {
    const btn = document.getElementById("btn-" + r);
    if (btn) btn.classList.add("disabled");
  });
  updateLegend();
}

function updateLegend() {
  const leg = document.getElementById("regionLegend");
  leg.innerHTML = "";
  const gradients = {
    sumatra: "linear-gradient(135deg,#7c3aed,#a78bfa)",
    jawa: "linear-gradient(135deg,#ec4899,#fb7185)",
    kalimantan: "linear-gradient(135deg,#f59e0b,#fbbf24)",
    sulawesi: "linear-gradient(135deg,#0d9488,#34d399)",
    papua: "linear-gradient(135deg,#0ea5e9,#38bdf8)",
  };
  usedRegions.forEach((r) => {
    const p = document.createElement("span");
    p.className = "legend-pill";
    p.style.background = gradients[r];
    p.textContent = "✓ " + regionLabel[r];
    leg.appendChild(p);
  });
}

// ============ GROUPS ============
function loadGroups() {
  const gl = document.getElementById("groupList");
  gl.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button");
    btn.className = "group-btn" + (usedGroups.includes(i) ? " disabled" : "");
    btn.style.background = groupColors[i - 1];
    btn.innerHTML = `<span class="g-icon">${groupIcons[i - 1]}</span>Kelompok ${i}`;
    if (!usedGroups.includes(i)) btn.onclick = () => startQuiz(i);
    gl.appendChild(btn);
  }
}

// ============ QUIZ ============
function startQuiz(group) {
  currentGroup = group;
  usedGroups.push(group);
  currentQuestion = 0;
  score = 0;
  showPage("quizPage");
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const data = quizData[currentRegion][currentQuestion];
  document.getElementById("question").textContent = data.question;
  document.getElementById("qNumber").textContent = `Soal ${currentQuestion + 1}/5`;
  document.getElementById("scoreLive").textContent = score;
  document.getElementById("progressBar").style.width = (currentQuestion / 5) * 100 + "%";

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  let shuffled = [...data.answers];
  const correctAnswer = shuffled[data.correct];
  shuffleArray(shuffled);
  const correctIndex = shuffled.findIndex((a) => a.text === correctAnswer.text);
  answersDiv.dataset.correct = correctIndex;

  const labels = ["A", "B", "C", "D"];
  shuffled.forEach((ans, i) => {
    const card = document.createElement("div");
    card.className = "answer-card";
    card.style.animationDelay = i * 0.07 + "s";
    card.innerHTML = `
      <span class="label-badge">${labels[i]}</span>
      <img src="${ans.image}" alt="${ans.text}" loading="lazy" onerror="this.style.background='#f3f4f6';this.style.height='80px'"/>
      <div class="ans-text">${ans.text}</div>
    `;
    card.onclick = () => checkAnswer(i);
    answersDiv.appendChild(card);
  });
}

function checkAnswer(index) {
  if (answered) return;
  answered = true;
  const correct = parseInt(document.getElementById("answers").dataset.correct);
  const cards = document.querySelectorAll(".answer-card");

  cards.forEach((c, i) => {
    c.classList.add("locked");
    if (i === correct) c.classList.add("correct");
    else if (i === index) c.classList.add("wrong");
  });

  if (index === correct) {
    score++;
    document.getElementById("scoreLive").textContent = score;
    showToast("🎉 Jawaban Benar! Keren!");
  } else {
    showToast("😅 Salah... Jawaban yang benar: " + document.querySelectorAll(".ans-text")[correct].textContent);
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < 5) loadQuestion();
    else finishQuiz();
  }, 1400);
}

// ============ RESULT ============
function finishQuiz() {
  scores["Kelompok " + currentGroup] = score;
  usedRegions.push(currentRegion);
  updateRegionButtons();

  const starsRow = document.getElementById("starsRow");
  starsRow.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const s = document.createElement("span");
    s.className = "star-anim";
    s.textContent = i < score ? "⭐" : "☆";
    starsRow.appendChild(s);
  }

  document.getElementById("scoreBig").textContent = score;
  const msgs = ["Tetap semangat! 💪", "Lumayan, terus belajar! 📚", "Bagus sekali! 👍", "Hampir sempurna! 🌟", "Sempurna! Juara! 🏆", "LUAR BIASA! 🎊"];
  document.getElementById("resultMsg").textContent = msgs[score] || msgs[4];

  if (score >= 4) spawnConfetti();
  showPage("resultPage");
}

function backToMap() {
  if (usedRegions.length === Object.keys(quizData).length) {
    showLeaderboard();
  } else {
    showPage("mapPage");
  }
}

// ============ LEADERBOARD ============
function showLeaderboard() {
  const board = document.getElementById("leaderboard");
  board.innerHTML = "";
  const medals = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  sorted.forEach((item, i) => {
    const row = document.createElement("div");
    row.className = "lb-row";
    row.style.animationDelay = i * 0.12 + "s";
    row.innerHTML = `<span class="lb-medal">${medals[i] || "🎖️"}</span><span class="lb-name">${item[0]}</span><span class="lb-score">⭐ ${item[1]} / 5</span>`;
    board.appendChild(row);
  });
  spawnConfetti();
  showPage("leaderboardPage");
}

function resetGame() {
  usedRegions = [];
  usedGroups = [];
  scores = {};
  document.querySelectorAll(".region.pin").forEach((b) => b.classList.remove("disabled"));
  document.getElementById("regionLegend").innerHTML = "";
  showPage("mapPage");
}

window.selectRegion = selectRegion;
window.backToMap = backToMap;
window.goToMap = goToMap;
window.resetGame = resetGame;
