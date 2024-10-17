
//可読性のために変数名
const textViewer = document.getElementById("textViewer");

//分岐
const viewText = () => {
    const result = Math.random() * 10;
    if (result < 5) {
        text.innerHTML = "5より小さい"
        console.log(result);
    } else {
        text.innerHTML = "5以上"
        console.log(result);
    }
}