const startTimer = document.getElementById("startTimer");
const confirmTime = document.getElementById("confirmTime");

let timer;
let sec = 0;

//スタートボタン
startTimer.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(countUp, 1000);
});

const countUp = () => {
  sec += 1;
  console.log(sec);
  if (sec === 40) {
    clearInterval(timer);
    alert("時間切れ！");
    sec = 0;
  }
};

//確認ボタン
confirmTime.addEventListener("click", () => {
  if (sec === 20) {
    alert("20秒ジャスト!");
  } else if (sec < 20) {
    alert(`まだ${sec}秒だ`);
  } else {
    alert(`もう${sec}秒だ`);
  }
  clearInterval(timer);
  sec = 0;
});
