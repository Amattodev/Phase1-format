const input = document.getElementById("inputNum");
const numCheck = document.getElementById("numCheck");
const remainTurn = document.getElementById("remainTurn");

let turn = 10;
remainTurn.textContent = `あと残り${turn}回です`;

const numeronData = {
  answerNum: [null, null, null],
  inputNum: [null, null, null],
};

//3桁の数字をランダム生成
const random = () => {
  numeronData.answerNum[0] = Math.floor(Math.random() * 10);
  do {
    numeronData.answerNum[1] = Math.floor(Math.random() * 10);
  } while (numeronData.answerNum[0] === numeronData.answerNum[1]);
  do {
    numeronData.answerNum[2] = Math.floor(Math.random() * 10);
  } while (
    numeronData.answerNum[0] === numeronData.answerNum[2] ||
    numeronData.answerNum[1] === numeronData.answerNum[2]
  );
};

random();

//ヌメロン処理
numCheck.addEventListener("click", () => {
  //エラー
  if (input.value === "") {
    alert("入力してください");
    return;
  }
  if (input.value.length > 3) {
    alert("3桁の数字を入力してください");
    return;
  }
  const duplicateNum = new Set(input.value).size !== input.value.length;
  if (duplicateNum) {
    alert("同じ数字を入力しないでください");
    return;
  }
  //数字のチェック
  let eat = 0;
  let bite = 0;
  numeronData.inputNum = input.value.split("").map(Number);
  for (let i = 0; i < 3; i++) {
    if (numeronData.inputNum[i] === numeronData.answerNum[i]) {
      eat += 1;
    } else if (numeronData.answerNum.includes(numeronData.inputNum[i])) {
      bite += 1;
    }
  }
  alert(`${eat}:EAT、${bite}BITE`);
  turn -= 1;
  remainTurn.textContent = `あと残り${turn}回です`;
  //判定処理
  if (eat === 3) {
    alert("正解です！");
    random();
  }
  if (turn === 0) {
    remainTurn.textContent = `ゲームオーバー。正解は${numeronData.answerNum.join(
      ""
    )}です。`;
    numCheck.disabled = true;
  }
  input.value = "";
});
