const pushBtn = document.getElementById("pushBtn");
const viewImg = document.getElementById("viewImg");
const skipBtn = document.getElementById("skipBtn");
const loopBtn = document.getElementById("loopBtn");
const stopBtn = document.getElementById("stopBtn");

let imgNum = 0;
let loop;

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

const changeImg = () => {
  if (imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum += 1;
  }
  pushBtn.textContent = data[imgNum].text;
  viewImg.setAttribute("src", data[imgNum].img);
};

//ボタンを押すと画像が表示される
pushBtn.addEventListener("click", () => {
  changeImg();
});

//formの選択肢ごとに飛べる
skipBtn.addEventListener("click", function () {
  imgNum = document.getElementById("seasonNum").value;
  imgNum = parseInt(imgNum);
  viewImg.setAttribute("src", data[imgNum].img);
  pushBtn.textContent = data[imgNum].text;
});

//10秒ごとに画像がループする
loopBtn.addEventListener("click", () => {
  clearInterval(loop);
  loop = setInterval(changeImg, 10000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(loop);
});
