const startTimer2 = document.getElementById("startTimer2");
const confirmTime2 = document.getElementById("confirmTime2");

let timer;
let diffTime;
let startTime;

const countUp = () => {
  let nowTime = new Date();
  diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);
  console.log(diffTime);
  if (diffTime === 40) {
    alert("時間切れ！");
  }
};

//スタートボタン押された時に、現在時刻と押された時刻の差分を計測
startTimer2.addEventListener("click", () => {
  clearInterval(timer);
  startTime = new Date();
  timer = setInterval(countUp, 1000);
});

//確認ボタン
confirmTime2.addEventListener("click", () => {
  if (diffTime === 20) {
    alert("20秒ジャスト!");
  } else if (diffTime < 20) {
    alert(`まだ${diffTime}秒だ`);
  } else {
    alert(`もう${sec}秒だ`);
  }
  clearInterval(timer);
});
