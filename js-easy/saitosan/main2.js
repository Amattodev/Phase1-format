const setBtn = () => {
    const hoge = Math.random() * 10; 
    if (hoge < 5) {
        // alert('ペッペッペー');
        const result = window.confirm('ペッペッペー');
        if (result) {
            alert('ペッペッペー');
        } else {
            alert('斎藤さんだぞ');
        }
    } else {
        const result = window.confirm('斎藤さんだぞ');
        if (result) {
            alert('斎藤さんだぞ');
        } else {
            alert('ペッペッペー');
        }
    }
    console.log(hoge);
}


