
//constとfunctionの違い

//チャレンジ問題の不明なところ
const reply = function() {
  const action = Array(1 * cntPerson + 1).join('どうぞどうぞ');
  alert(action);
  cntPerson = 0;
};