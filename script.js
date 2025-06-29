
document.getElementById("startBtn").addEventListener("click", function() {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("quizContent").innerHTML = "<p>測驗題目將顯示於此（待填寫）</p>";
  document.getElementById("quizContent").style.display = "block";
});
