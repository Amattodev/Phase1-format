const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

setBtn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum);
  showImg.innerHTML = "";

  const firstImg = document.createElement("div");
  firstImg.innerHTML = "<img src='./img/evolution1.png' alt='原人' />";
  showImg.appendChild(firstImg);

  if (randomNum >= 4) {
    const secondImg = document.createElement("div");
    secondImg.innerHTML = "<img src='./img/evolution2.png' alt='旧人' />";
    showImg.appendChild(secondImg);
  }
  if (randomNum >= 7) {
    const thirdImg = document.createElement("div");
    thirdImg.innerHTML = "<img src='./img/evolution3.png' alt='新人' />";
    showImg.appendChild(thirdImg);
  }
  if (randomNum >= 9) {
    const forthImg = document.createElement("div");
    forthImg.innerHTML = "<img src='./img/evolution4.png' alt='現代人' />";
    showImg.appendChild(forthImg);
  }
});
