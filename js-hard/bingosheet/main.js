let bingoSheet = [];
let usedNumbers = [];
let answerNumbers = [];
const table = document.getElementById("view");
const hitNum = document.getElementById("hitNum");

for (let row = 0; row < 5; row++) {
  bingoSheet[row] = [];
  for (let column = 0; column < 5; column++) {
    let num;
    do {
      let min = column * 15 + 1; //1,16,31,46,61
      let max = column * 15 + 15; //15,30,45,60,75
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(num));
    bingoSheet[row][column] = num;
    usedNumbers.push(num);
    if (row === 2 && column === 2) {
      bingoSheet[row][column] = "Free";
    }
  }
  console.log(bingoSheet);
  console.log(usedNumbers);
}

// trとtdの要素を作成し、テーブルを表示
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
    answerNum = Math.floor(Math.random() * 75) + 1;
  } while (answerNumbers.includes(answerNum));
  answerNumbers.push(answerNum);
  alert(`数字は${answerNum}番です！`);
  const tds = Array.from(table.getElementsByTagName("td"));
  tds.forEach((td) => {
    if (parseInt(td.textContent) === answerNum) {
      td.classList.add("hit-num");
    }
  });
});
