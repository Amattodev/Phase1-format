const gameData = {
  cards: [],
  flippedCards: [],
  cardMatchCount: 0,
};

//関数名の整理（初期化の関数にまとめる）
const setUpGame = () => {
  shuffle();
  flipCards();
};

const shuffle = () => {
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
const flipCards = () => {
  gameData.cards.forEach((card) => {
    //カードに数字を表示
    const panel = document.getElementById("panel");
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "back");
    panel.appendChild(cardElement);
    cardElement.textContent = "";
    //カードをフリップする
    cardElement.addEventListener("click", () => {
      if (gameData.flippedCards.length < 2) {
        //正解したカードをクリックした際のエラー
        if (
          gameData.flippedCards.includes(cardElement) ||
          cardElement.classList.contains("finish")
        ) {
          return;
        }
        cardElement.classList.remove("back");
        cardElement.classList.add("flipped");
        cardElement.textContent = card;
        gameData.flippedCards.push(cardElement);
        //フリップしたカードが2枚の時
        if (gameData.flippedCards.length === 2) {
          setTimeout(checkCards, 1500);
          console.log(gameData.flippedCards);
        }
      }
    });
  });
};

const checkCards = () => {
  if (
    gameData.flippedCards[0].textContent ===
    gameData.flippedCards[1].textContent
  ) {
    gameData.flippedCards[0].classList.add("finish");
    gameData.flippedCards[1].classList.add("finish");
    gameData.cardMatchCount += 2;
    gameData.flippedCards = [];
    if (gameData.cardMatchCount === gameData.cards.length) {
      alert("終了");
    }
  } else {
    gameData.flippedCards[0].classList.remove("flipped");
    gameData.flippedCards[1].classList.remove("flipped");
    gameData.flippedCards[0].classList.add("back");
    gameData.flippedCards[1].classList.add("back");
    gameData.flippedCards = [];
  }
};

setUpGame();
