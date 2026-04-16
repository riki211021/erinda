// ============ DATA ============
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

const quizData = {
  jawa: [
    {
      question: "Rumah adat Jawa adalah?",
      answers: [
        { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pendapa_joglo.jpg/320px-Pendapa_joglo.jpg" },
        { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Honai.JPG/320px-Honai.JPG" },
        { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/RumahGadang.jpg/320px-RumahGadang.jpg" },
        { text: "Limas", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rumah_limas.jpg/320px-Rumah_limas.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Makanan khas Jawa yang terkenal?",
      answers: [
        { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gudeg_Jogja.jpg/320px-Gudeg_Jogja.jpg" },
        { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Papeda_and_sup_ikan.jpg/320px-Papeda_and_sup_ikan.jpg" },
        { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rendang.jpg/320px-Rendang.jpg" },
        { text: "Mie Aceh", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mie_aceh.jpg/320px-Mie_aceh.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Pakaian adat Jawa yang terkenal?",
      answers: [
        { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Kebaya_jawa.jpg/240px-Kebaya_jawa.jpg" },
        { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Batak_Toba_Ulos.jpg/320px-Batak_Toba_Ulos.jpg" },
        { text: "Koteka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Papua_koteka.jpg/240px-Papua_koteka.jpg" },
        { text: "Baju Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Baju_Bodo.jpg/240px-Baju_Bodo.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Tarian tradisional dari Jawa Tengah?",
      answers: [
        { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tari_Serimpi.jpg/240px-Tari_Serimpi.jpg" },
        { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kecak_Bali.jpg/320px-Kecak_Bali.jpg" },
        { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tari_Saman_by_Budak_Ibu.jpg/320px-Tari_Saman_by_Budak_Ibu.jpg" },
        { text: "Tor-Tor", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tor_Tor_Dance.jpg/320px-Tor_Tor_Dance.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Senjata tradisional dari Jawa?",
      answers: [
        { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Keris_Brojol.jpg/240px-Keris_Brojol.jpg" },
        { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mandau-1.jpg/320px-Mandau-1.jpg" },
        { text: "Badik", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Badik.jpg/320px-Badik.jpg" },
        { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rencong.jpg/320px-Rencong.jpg" },
      ],
      correct: 0,
    },
  ],
  sumatra: [
    {
      question: "Rumah adat Minangkabau (Sumatra)?",
      answers: [
        { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/RumahGadang.jpg/320px-RumahGadang.jpg" },
        { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pendapa_joglo.jpg/320px-Pendapa_joglo.jpg" },
        { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Honai.JPG/320px-Honai.JPG" },
        { text: "Lamin", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rumah_Lamin_Dayak.jpg/320px-Rumah_Lamin_Dayak.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Makanan khas Sumatra Barat?",
      answers: [
        { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rendang.jpg/320px-Rendang.jpg" },
        { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gudeg_Jogja.jpg/320px-Gudeg_Jogja.jpg" },
        { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Papeda_and_sup_ikan.jpg/320px-Papeda_and_sup_ikan.jpg" },
        { text: "Rawon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Rawon.jpg/320px-Rawon.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Kain tradisional Sumatra Utara?",
      answers: [
        { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Batak_Toba_Ulos.jpg/320px-Batak_Toba_Ulos.jpg" },
        { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Kebaya_jawa.jpg/240px-Kebaya_jawa.jpg" },
        { text: "Baju Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Baju_Bodo.jpg/240px-Baju_Bodo.jpg" },
        { text: "Koteka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Papua_koteka.jpg/240px-Papua_koteka.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Tarian dari Aceh yang terkenal?",
      answers: [
        { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tari_Saman_by_Budak_Ibu.jpg/320px-Tari_Saman_by_Budak_Ibu.jpg" },
        { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kecak_Bali.jpg/320px-Kecak_Bali.jpg" },
        { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tari_Serimpi.jpg/240px-Tari_Serimpi.jpg" },
        { text: "Piring", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Tari_piring.jpg/240px-Tari_piring.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Senjata khas Aceh (Sumatra)?",
      answers: [
        { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rencong.jpg/320px-Rencong.jpg" },
        { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Keris_Brojol.jpg/240px-Keris_Brojol.jpg" },
        { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mandau-1.jpg/320px-Mandau-1.jpg" },
        { text: "Badik", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Badik.jpg/320px-Badik.jpg" },
      ],
      correct: 0,
    },
  ],
  kalimantan: [
    {
      question: "Rumah adat suku Dayak?",
      answers: [
        { text: "Lamin", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rumah_Lamin_Dayak.jpg/320px-Rumah_Lamin_Dayak.jpg" },
        { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pendapa_joglo.jpg/320px-Pendapa_joglo.jpg" },
        { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/RumahGadang.jpg/320px-RumahGadang.jpg" },
        { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Honai.JPG/320px-Honai.JPG" },
      ],
      correct: 0,
    },
    {
      question: "Makanan khas Banjar (Kalimantan)?",
      answers: [
        { text: "Soto Banjar", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Soto_banjar.jpg/320px-Soto_banjar.jpg" },
        { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gudeg_Jogja.jpg/320px-Gudeg_Jogja.jpg" },
        { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rendang.jpg/320px-Rendang.jpg" },
        { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Papeda_and_sup_ikan.jpg/320px-Papeda_and_sup_ikan.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Pakaian adat suku Dayak?",
      answers: [
        { text: "Ta'a & Sapei", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pakaian_Dayak_Kenyah.jpg/240px-Pakaian_Dayak_Kenyah.jpg" },
        { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Batak_Toba_Ulos.jpg/320px-Batak_Toba_Ulos.jpg" },
        { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Kebaya_jawa.jpg/240px-Kebaya_jawa.jpg" },
        { text: "Baju Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Baju_Bodo.jpg/240px-Baju_Bodo.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Tarian dari Kalimantan Timur?",
      answers: [
        { text: "Kancet Ledo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kancet_Ledo_Dance.jpg/320px-Kancet_Ledo_Dance.jpg" },
        { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tari_Saman_by_Budak_Ibu.jpg/320px-Tari_Saman_by_Budak_Ibu.jpg" },
        { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kecak_Bali.jpg/320px-Kecak_Bali.jpg" },
        { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tari_Serimpi.jpg/240px-Tari_Serimpi.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Senjata tradisional suku Dayak?",
      answers: [
        { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mandau-1.jpg/320px-Mandau-1.jpg" },
        { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Keris_Brojol.jpg/240px-Keris_Brojol.jpg" },
        { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rencong.jpg/320px-Rencong.jpg" },
        { text: "Badik", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Badik.jpg/320px-Badik.jpg" },
      ],
      correct: 0,
    },
  ],
  sulawesi: [
    {
      question: "Rumah adat Toraja (Sulawesi)?",
      answers: [
        { text: "Tongkonan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tongkonan.jpg/320px-Tongkonan.jpg" },
        { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pendapa_joglo.jpg/320px-Pendapa_joglo.jpg" },
        { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/RumahGadang.jpg/320px-RumahGadang.jpg" },
        { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Honai.JPG/320px-Honai.JPG" },
      ],
      correct: 0,
    },
    {
      question: "Makanan khas Makassar (Sulawesi)?",
      answers: [
        { text: "Coto Makassar", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Coto_Makassar.jpg/320px-Coto_Makassar.jpg" },
        { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rendang.jpg/320px-Rendang.jpg" },
        { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gudeg_Jogja.jpg/320px-Gudeg_Jogja.jpg" },
        { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Papeda_and_sup_ikan.jpg/320px-Papeda_and_sup_ikan.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Pakaian adat Bugis (Sulawesi)?",
      answers: [
        { text: "Baju Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Baju_Bodo.jpg/240px-Baju_Bodo.jpg" },
        { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Batak_Toba_Ulos.jpg/320px-Batak_Toba_Ulos.jpg" },
        { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Kebaya_jawa.jpg/240px-Kebaya_jawa.jpg" },
        { text: "Koteka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Papua_koteka.jpg/240px-Papua_koteka.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Tarian khas Sulawesi Selatan?",
      answers: [
        { text: "Pakarena", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pakarena.jpg/320px-Pakarena.jpg" },
        { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tari_Saman_by_Budak_Ibu.jpg/320px-Tari_Saman_by_Budak_Ibu.jpg" },
        { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kecak_Bali.jpg/320px-Kecak_Bali.jpg" },
        { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tari_Serimpi.jpg/240px-Tari_Serimpi.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Senjata khas Sulawesi?",
      answers: [
        { text: "Badik", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Badik.jpg/320px-Badik.jpg" },
        { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Keris_Brojol.jpg/240px-Keris_Brojol.jpg" },
        { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mandau-1.jpg/320px-Mandau-1.jpg" },
        { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rencong.jpg/320px-Rencong.jpg" },
      ],
      correct: 0,
    },
  ],
  papua: [
    {
      question: "Rumah adat Papua yang berbentuk bundar?",
      answers: [
        { text: "Honai", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Honai.JPG/320px-Honai.JPG" },
        { text: "Joglo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pendapa_joglo.jpg/320px-Pendapa_joglo.jpg" },
        { text: "Gadang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/RumahGadang.jpg/320px-RumahGadang.jpg" },
        { text: "Tongkonan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tongkonan.jpg/320px-Tongkonan.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Makanan pokok khas Papua?",
      answers: [
        { text: "Papeda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Papeda_and_sup_ikan.jpg/320px-Papeda_and_sup_ikan.jpg" },
        { text: "Gudeg", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gudeg_Jogja.jpg/320px-Gudeg_Jogja.jpg" },
        { text: "Rendang", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rendang.jpg/320px-Rendang.jpg" },
        { text: "Soto Banjar", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Soto_banjar.jpg/320px-Soto_banjar.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Pakaian tradisional laki-laki Papua?",
      answers: [
        { text: "Koteka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Papua_koteka.jpg/240px-Papua_koteka.jpg" },
        { text: "Kebaya", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Kebaya_jawa.jpg/240px-Kebaya_jawa.jpg" },
        { text: "Ulos", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Batak_Toba_Ulos.jpg/320px-Batak_Toba_Ulos.jpg" },
        { text: "Baju Bodo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Baju_Bodo.jpg/240px-Baju_Bodo.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Tarian tradisional Papua?",
      answers: [
        { text: "Yospan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Yospan.jpg/320px-Yospan.jpg" },
        { text: "Saman", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tari_Saman_by_Budak_Ibu.jpg/320px-Tari_Saman_by_Budak_Ibu.jpg" },
        { text: "Kecak", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kecak_Bali.jpg/320px-Kecak_Bali.jpg" },
        { text: "Serimpi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tari_Serimpi.jpg/240px-Tari_Serimpi.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Senjata tradisional Papua?",
      answers: [
        { text: "Busur & Panah", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Papua_bow_arrow.jpg/320px-Papua_bow_arrow.jpg" },
        { text: "Keris", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Keris_Brojol.jpg/240px-Keris_Brojol.jpg" },
        { text: "Mandau", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mandau-1.jpg/320px-Mandau-1.jpg" },
        { text: "Rencong", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rencong.jpg/320px-Rencong.jpg" },
      ],
      correct: 0,
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
