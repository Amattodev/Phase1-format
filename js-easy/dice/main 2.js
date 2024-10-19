const setPlayer1dice = document.getElementById("setPlayer1dice");
const setPlayer2dice = document.getElementById("setPlayer2dice");
setPlayer1dice.setAttribute("src", "./img/saikoro1.png");
setPlayer2dice.setAttribute("src", "./img/saikoro1.png");
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const result = document.getElementById("result");

let player1Stop;
let player2Stop;
let player1Timer;
let player2Timer;

const function1 = () => {
  player1Btn.disabled = true;
  player1Stop = false;
  result.textContent = "???";
  player1Timer = setInterval(() => {
    dice1 = Math.floor(Math.random() * 6 + 1);
    setPlayer1dice.setAttribute("src", `./img/saikoro${dice1}.png`);
  }, 100);
  setTimeout(() => {
    clearInterval(player1Timer);
    player1Stop = true;
    if (player1Stop === true && player2Stop === true) {
      console.log(dice1, dice2);
      if (dice1 > dice2) {
        result.textContent = "Player1の勝利";
      } else if (dice1 < dice2) {
        result.textContent = "Player2の勝利";
      } else if (dice1 === dice2) {
        result.textContent = "引き分け";
      }
      player1Btn.disabled = false;
      player2Btn.disabled = false;
    }
  }, 3000);
};

const function2 = () => {
  player2Btn.disabled = true;
  player2Stop = false;
  result.textContent = "???";
  player2Timer = setInterval(() => {
    dice2 = Math.floor(Math.random() * 6 + 1);
    setPlayer2dice.setAttribute("src", `./img/saikoro${dice2}.png`);
  }, 100);
  setTimeout(() => {
    clearInterval(player2Timer);
    player2Stop = true;
    if (player1Stop === true && player2Stop === true) {
      console.log(dice2, dice1);
      if (dice2 > dice1) {
        result.textContent = "Player2の勝利";
      } else if (dice2 < dice1) {
        result.textContent = "Player1の勝利";
      } else if (dice2 === dice1) {
        result.textContent = "引き分け";
      }
      player1Btn.disabled = false;
      player2Btn.disabled = false;
    }
  }, 3000);
};

player1Btn.addEventListener("click", function1);
player2Btn.addEventListener("click", function2);
