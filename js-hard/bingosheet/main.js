let bingoSheet = [];
let answerNumbers = [];
const table = document.getElementById("view");
const hitNum = document.getElementById("hitNum");
//5x5のビンゴシートを作成
for (let i = 0; i < 5; i++) {
  bingoSheet[i] = [];
  for (let j = 0; j < 5; j++) {
    do {
      num = Math.floor(Math.random() * 99);
      bingoSheet[i][j] = num;
    } while (bingoSheet.includes(num));
    if (i === 2 && j === 2) {
      bingoSheet[i][j] = "Free";
    }
  }
}

//trとtdの要素を作成し、テーブルを表示
const displayBingoSheet = () => {
  bingoSheet.forEach((row) => {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    row.forEach((num) => {
      const td = document.createElement("td");
      td.textContent = num;
      tr.appendChild(td);
    });
  });
};
displayBingoSheet();

//セットボタンで乱数をアラート表示
hitNum.addEventListener("click", () => {
  let answerNum;
  do {
    answerNum = Math.floor(Math.random() * 99);
  } while (answerNumbers.includes(answerNum));
  answerNumbers.push(answerNum);
  console.log(answerNumbers);
  alert(`数字は${answerNum}番です！`);
  const tds = Array.from(table.getElementsByTagName("td"));
  tds.forEach((td) => {
    if (parseInt(td.textContent) === answerNum) {
      td.classList.add("hit-num");
    }
  });
});
