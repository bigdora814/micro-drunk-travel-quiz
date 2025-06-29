const questions = [
  {
    q: "假日你最想做什麼？",
    options: ["泡湯放空", "親子時光", "文青散步", "夜市美食"],
    score: ["relax", "family", "art", "social"]
  },
  {
    q: "你偏好哪種飲品？",
    options: ["梅酒", "清爽啤酒", "紅酒", "不喝酒"],
    score: ["relax", "social", "art", "family"]
  },
  {
    q: "你最愛的房型風格是？",
    options: ["湯屋", "家庭親子", "閱讀空間", "高樓夜景"],
    score: ["relax", "family", "art", "social"]
  }
];

let current = 0;
let scoreMap = {relax: 0, family: 0, art: 0, social: 0};

function renderQuestion() {
  const q = questions[current];
  const container = document.getElementById("quiz");
  container.innerHTML = "<h2>" + q.q + "</h2>";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      scoreMap[q.score[i]]++;
      current++;
      if (current < questions.length) renderQuestion();
      else showResult();
    };
    container.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  let max = Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0][0];
  const resultMap = {
    relax: {
      text: "你是【療癒系旅人】！推薦入住：景觀套房＋星光梅酒",
      img: "images/relax.jpg"
    },
    family: {
      text: "你是【親子系旅人】！推薦入住：尊爵親子房＋貝貝佳寶貝禮包",
      img: "images/family.jpg"
    },
    art: {
      text: "你是【文藝系旅人】！推薦入住：尊爵套房＋紅酒午茶",
      img: "images/art.jpg"
    },
    social: {
      text: "你是【社交系旅人】！推薦入住：尊爵套房＋深夜宵夜酒",
      img: "images/social.jpg"
    }
  };
  const res = resultMap[max];
  document.getElementById("result").innerHTML = `<h2>${res.text}</h2><img src="${res.img}" alt="result" class="result-img" />`;
  document.getElementById("result").style.display = "block";
  document.getElementById("form").style.display = "block";
}

// 啟動測驗與觸發影片播放
document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("startBtn").style.display = "none";
  renderQuestion();

  // 嘗試播放背景影片（需互動觸發）
  const bgvid = document.getElementById("bgvid");
  if (bgvid && bgvid.paused) {
    bgvid.play().catch(e => console.log("背景影片播放失敗：", e));
  }
});
