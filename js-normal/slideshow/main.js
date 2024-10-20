const pushBtn = document.getElementById("pushBtn");
const viewImg = document.getElementById("viewImg");
const skipBtn = document.getElementById("skipBtn");

let imgNum = 0;

//画像とボタンをセットで保存
const data = [
  { img: "./img/slide1.png", text: "春へ" },
  { img: "./img/slide2.png", text: "夏へ" },
  { img: "./img/slide3.png", text: "秋へ" },
  { img: "./img/slide4.png", text: "冬へ" },
];

//初期の状態
pushBtn.textContent = data[imgNum].text;
viewImg.setAttribute("src", data[imgNum].img);

//ボタンを押すと画像が表示される
pushBtn.addEventListener("click", () => {
  if (imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum += 1;
  }
  pushBtn.textContent = data[imgNum].text;
  viewImg.setAttribute("src", data[imgNum].img);
});

//formの選択肢ごとに飛べる
skipBtn.addEventListener("click", function () {
  imgNum = document.getElementById("seasonNum").value;
  imgNum = parseInt(imgNum);
  viewImg.setAttribute("src", data[imgNum].img);
  pushBtn.textContent = data[imgNum].text;
});
