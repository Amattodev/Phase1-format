const startBtn = document.getElementById("diceBtn");
const body = document.querySelector("body");

//サイコロ要素
const dice = document.createElement("img");
body.appendChild(dice);
dice.style.height = "100px";
let diceNum = "./img/saikoro1.png";
dice.setAttribute("src", diceNum);

//サイコロの目をランダムで表示
const random = () => {
  //1~6までの数字をランダムで出す
  diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  dice.setAttribute("src", diceNum);
};

//ボタンを押すと、ランダムの目が表示される
startBtn.addEventListener("click", () => {
  //100ミリ秒ごとにrandom()が実行される
  let timer = setInterval("random()", 100);
  timer;
  //random関数を3秒後に止める
  setTimeout(() => {
    clearInterval(timer);
  }, 3000);
});
