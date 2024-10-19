const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const inputTime = document.getElementById("inputTime");
const nowTime = document.getElementById("nowTime");

let timer;
let sec;

//数字をセットする
setTime.addEventListener("click", () => {
  sec = inputTime.value;
  leftSec = sec % 60; //余り
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒：セット完了で`;
});

//カウントダウン
const countDown = () => {
  sec -= 1;
  leftSec = sec % 60; //余り
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
  if (sec === 0) {
    alert("終了！");
    clearInterval(timer);
  }
};

//スタートボタンでカウントダウン
startTimer.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(countDown, 1000);
});

//ストップボタン
stopTimer.addEventListener("click", () => {
  clearInterval(timer);
  leftSec = sec % 60; //余り
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒:ストップ`;
});
