const startTimer = document.getElementById("startTimer");
const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");

const slotData = {
  slotTable: [
    document.querySelectorAll(".slot :nth-child(1)"),
    document.querySelectorAll(".slot :nth-child(2)"),
    document.querySelectorAll(".slot :nth-child(3)"),
  ],
  stopTimerId: [null, null, null],
  stopBtns: [setTime1, setTime2, setTime3],
  startBtn: startTimer,
  isPlaying: [false, false, false],
};

slotData.slotTable.forEach((columns) => {
  columns.forEach((slot, index) => {
    slot.textContent = index;
  });
});

const judge = () => {
  if (slotData.isPlaying.every((v) => !v)) {
    if (
      slotData.slotTable[0][1].textContent ===
        slotData.slotTable[1][1].textContent &&
      slotData.slotTable[0][1].textContent ===
        slotData.slotTable[2][1].textContent
    ) {
      alert("揃いました！");
      reset();
    } else {
      alert("再挑戦！");
      reset();
    }
  }
};

const reset = () => {
  startTimer.disabled = false;
  setTime1.disabled = false;
  setTime2.disabled = false;
  setTime3.disabled = false;
};

startTimer.addEventListener("click", () => {
  slotData.slotTable.forEach((columns, index) => {
    slotData.stopTimerId[index] = setInterval(() => {
      slotData.isPlaying[index] = true;
      columns.forEach((slot) => {
        let newValue = parseInt(slot.textContent) + 1;
        if (newValue >= 10) {
          newValue = 0;
        }
        slot.textContent = newValue;
      });
    }, 100);
    startTimer.disabled = true;
  });
});

slotData.stopBtns.forEach((stopBtn, index) => {
  stopBtn.addEventListener("click", () => {
    slotData.isPlaying[index] = false;
    clearInterval(slotData.stopTimerId[index]);
    slotData.stopBtns[index].disabled = true;
    judge();
  });
});
