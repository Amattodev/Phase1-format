// コンソールに出力
// console.log("Hello, World!");
// console.log("こんにちは、世界!");
// console.log(1 + 2);
// console.log(10 - 4 * 8);


//値の種類
// console.log(100) // 数値
// console.log('hello') // 文字列
// console.log([1, 2, 3, 4, 5]) // 配列
// console.log(true) // 真偽値
// console.log(null) // 無
// console.log({ one: 1, two: 2 }) // オブジェクト

//変数宣言
// const answer = 42;
// console.log(answer);

// const name = "Taro Yamada" // 文字列
// const isValid = true       // 真偽値
// const userIds = [1, 3, 10] // 配列

// console.log(name, isValid, userIds);

//文字列結合
// const breakfast = "お茶漬け";
// console.log("今日の朝ごはんは" + breakfast + "でした");
// console.log(`今日の朝ごはんは${breakfast}でした`);

//配列
// const days = ['日', '月', '火', '水', '木', '金', '土'];

// console.log(days.length);

// console.log(days[0]);
// console.log(days[1]); 
// console.log(days[2]); 
// console.log(days[3]); 
// console.log(days[4]); 
// console.log(days[5]); 
// console.log(days[6]); 
// console.log(days[7]); 

// const nengou = ['明治', '大正', '昭和', '平成'];

// nengou.push('令和');
// console.log(nengou);

// nengou.splice(3, 1);
// console.log(nengou);

// nengou[1] = '昭和';
// console.log(nengou);

//条件分岐
// const num = Math.random();

// if (num >= 0.5) {
//     console.log('大きめ')
//   } else {
//     console.log('小さめ')
// }

// console.log(`数：${num}`)

//else if 
// const score = Math.random() * 100

// console.log(`点数: ${score}`)

// if (score >= 90) {
//   console.log('秀')
// } else if (score >= 75) {
//   console.log('優')
// } else if (score >= 60) {
//   console.log('良')
// } else if (score >= 30) {
//   console.log('可')
// } else {
//   console.log('不可')
// }

//ループ
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let s = 2 

// while (s < 100000) {
//   console.log(s)
//   s = s * s
// }

//関数
function cook(food1, food2) {
    console.log(food1 + 'を切ります。')
    console.log(food1 + 'を炒めます。')
    console.log(food2 + 'をすりおろします。')
    console.log(food1 + 'に' + food2 + 'を混ぜます。')
}

cook("豚肉","しょうが");





