
//結果を表示させる
let i = 1;
const showNum = document.getElementById("showNum");
showNum.innerHTML = i;

const fizzBtn = () => {
    i += 1;
    console.log(i);
    if (i % 3 === 0) {
        showNum.innerHTML = "Fizz";
    } else {
        alert("不正解！");
        location.reload();
    }

}

const buzzBtn = () => {
    i += 1;
    if (i % 5 === 0) {
        showNum.innerHTML = "Buzz";
    } else {
        alert("不正解！");
        location.reload();

    }

}

const fizzbuzzBtn = () => {
    i += 1;
    if (i % 3 === 0 && i % 5 === 0) {
        showNum.innerHTML = "FizzBuzz";
    } else {
        alert("不正解！");
        location.reload();

    }

}


const numBtn = () => {
    i += 1;
    if (i % 3 === 0 || i % 5 === 0 ) {
        alert("不正解！")
        location.reload();
    } else {
        showNum.innerHTML = i;
    }
}

