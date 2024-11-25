const gameData = {
  cards: [],
  flippedCardElements: [],
  cardMatchCount: 0,
};

//関数名の整理（初期化の関数にまとめる）
const setUpGame = () => {
  shuffleCards();
  displayCards();
};

const shuffleCards = () => {
  gameData.cards = [1, 1, 2, 2, 3, 3, 4, 4];

  for (let i = gameData.cards.length; 0 < i; i--) {
    let randomNum = Math.floor(Math.random() * i);

    [gameData.cards[randomNum], gameData.cards[i - 1]] = [
      gameData.cards[i - 1],
      gameData.cards[randomNum],
    ];
  }
};

//cardの変数名を変更
const displayCards = () => {
  gameData.cards.forEach((card) => {
    //カードに数字を表示
    const panel = document.getElementById("panel");
    const cardElement = document.createElement("div");

    cardElement.classList.add("card", "back");
    panel.appendChild(cardElement);
    cardElement.textContent = "";

    //カードをフリップする
    cardElement.addEventListener("click", () => flipCards(cardElement, card));
  });
};

const flipCards = (cardElement, card) => {
  if (gameData.flippedCardElements.length >= 2) {
    return;
  }

  if (
    gameData.flippedCardElements.includes(cardElement) ||
    cardElement.classList.contains("finish")
  ) {
    return;
  }

  cardElement.classList.remove("back");
  cardElement.classList.add("flipped");
  cardElement.textContent = card;
  gameData.flippedCardElements.push(cardElement);

  //フリップしたカードが2枚の時
  if (gameData.flippedCardElements.length === 2) {
    setTimeout(checkCards, 1000);
  }
};

const checkCards = () => {
  if (
    gameData.flippedCardElements[0].textContent ===
    gameData.flippedCardElements[1].textContent
  ) {
    gameData.flippedCardElements[0].classList.add("finish");
    gameData.flippedCardElements[1].classList.add("finish");

    gameData.cardMatchCount += 2;
    gameData.flippedCardElements = [];

    if (gameData.cardMatchCount === gameData.cards.length) {
      setTimeout(() => {
        alert("終了");
      }, 500);
    }
  } else {
    gameData.flippedCardElements[0].classList.remove("flipped");
    gameData.flippedCardElements[1].classList.remove("flipped");

    gameData.flippedCardElements[0].classList.add("back");
    gameData.flippedCardElements[1].classList.add("back");

    gameData.flippedCardElements = [];
  }
};

setUpGame();
