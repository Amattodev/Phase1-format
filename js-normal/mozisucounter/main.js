const sampleForm = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");
const iniDel = document.getElementById("iniDel");
const endDel = document.getElementById("endDel");

const maxNum = 400;
let textarea;

//文字数カウンター
sampleForm.addEventListener("keyup", () => {
  textCounter.textContent = `あと ${maxNum - sampleForm.value.length} 文字`;
});

//リセットボタン
resetBtn.addEventListener("click", () => {
  sampleForm.value = "";
  textCounter.textContent = `あと ${maxNum} 文字`;
});

//頭文字削除
iniDel.addEventListener("click", () => {
  textarea = sampleForm.value.slice(1);
  sampleForm.value = textarea;
  textCounter.textContent = `あと ${maxNum - sampleForm.value.length} 文字`;
});

//末尾削除
endDel.addEventListener("click", () => {
  textarea = sampleForm.value.slice(0, -1);
  sampleForm.value = textarea;
  textCounter.textContent = `あと ${maxNum - sampleForm.value.length} 文字`;
});
