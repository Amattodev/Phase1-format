const startTimer = document.getElementById("startTimer");
const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");
const nowTime1 = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");

nowTime1.textContent = 0;
nowTime2.textContent = 0;
nowTime3.textContent = 0;

let slots = [];
let newValue;

let isPlaying1 = false;
let isPlaying2 = false;
let isPlaying3 = false;

//スタートボタン
startTimer.addEventListener("click", () => {
  slots = [
    setInterval(() => {
      isPlaying1 = true;
      newValue = parseInt(nowTime1.textContent) + 1;
      if (newValue >= 10) {
        newValue = 0;
      }
      nowTime1.textContent = newValue;
    }, 100),
    setInterval(() => {
      isPlaying2 = true;
      newValue = parseInt(nowTime2.textContent) + 1;
      if (newValue >= 10) {
        newValue = 0;
      }
      nowTime2.textContent = newValue;
    }, 100),
    setInterval(() => {
      isPlaying3 = true;
      newValue = parseInt(nowTime3.textContent) + 1;
      if (newValue >= 10) {
        newValue = 0;
      }
      nowTime3.textContent = newValue;
    }, 100),
  ];
  startTimer.disabled = true;
});

//ストップボタン
setTime1.addEventListener("click", () => {
  isPlaying1 = false;
  clearInterval(slots[0]);
  setTime1.disabled = true;
  judge();
});

setTime2.addEventListener("click", () => {
  isPlaying2 = false;
  clearInterval(slots[1]);
  setTime2.disabled = true;
  judge();
});

setTime3.addEventListener("click", () => {
  isPlaying3 = false;
  clearInterval(slots[2]);
  setTime3.disabled = true;
  judge();
});

//スロット結果をジャッジ
const judge = () => {
  if (!isPlaying1 && !isPlaying2 && !isPlaying3) {
    if (
      nowTime1.textContent === nowTime2.textContent &&
      nowTime2.textContent === nowTime3.textContent
    ) {
      alert("揃いました！");
      reset();
    } else {
      alert("再挑戦！");
      reset();
    }
  }
};

//リセット
const reset = () => {
  startTimer.disabled = false;
  setTime1.disabled = false;
  setTime2.disabled = false;
  setTime3.disabled = false;
};
